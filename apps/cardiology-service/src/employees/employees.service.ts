/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) { }

  async specializeEmployee(payload: any, eventType: string) {
    const { userId, idUser, role, ...rest } = payload;
    const idUsuario = BigInt(userId || idUser);

    // 1. Verifica si ya existe un empleado con ese idUsuario
    let empleado = await this.prisma.empleado.findFirst({
      where: { idUsuario },
    });

    if (!empleado) {
      // Crea el empleado
      empleado = await this.prisma.empleado.create({
        data: {
          idUsuario,
          idDepartamento: 1, // Ajusta según lógica de negocio
          // Otros campos si los tienes
        },
      });
    }

    // 2. Valida especialización incompatible
    const medico = await this.prisma.medico.findFirst({
      where: { idEmpleado: empleado.idEmpleado },
    });
    const admin = await this.prisma.pAdministrativo.findFirst({
      where: { idEmpleado: empleado.idEmpleado },
    });

    if (eventType === 'DoctorSpecializationRequested' && admin) {
      throw new BadRequestException('No puede ser MEDIC y ADMIN a la vez');
    }
    if (eventType === 'AdminSpecializationRequested' && medico) {
      throw new BadRequestException('No puede ser ADMIN y MEDIC a la vez');
    }

    // 3. Especializa
    if (eventType === 'DoctorSpecializationRequested' && !medico) {
      if (typeof rest.sueldo !== 'number' || rest.sueldo <= 0) {
        throw new BadRequestException(
          'El sueldo es obligatorio y debe ser un número positivo para MEDIC.',
        );
      }
      await this.prisma.medico.create({
        data: {
          idEmpleado: empleado.idEmpleado,
          sueldo: rest.sueldo,
        },
      });
    }
    if (eventType === 'AdminSpecializationRequested' && !admin) {
      if (typeof rest.sueldo !== 'number' || rest.sueldo <= 0) {
        throw new BadRequestException(
          'El sueldo es obligatorio y debe ser un número positivo para ADMIN.',
        );
      }
      await this.prisma.pAdministrativo.create({
        data: {
          idEmpleado: empleado.idEmpleado,
          sueldo: rest.sueldo,
        },
      });
    }
  }

  async getUserRoles(idUsuario: bigint): Promise<string[]> {
    const empleado = await this.prisma.empleado.findFirst({
      where: { idUsuario },
      include: { medico: true, pAdministrativo: true },
    });
    const roles: string[] = [];
    if (empleado?.medico?.length) roles.push('MEDIC');
    if (empleado?.pAdministrativo?.length) roles.push('ADMIN');
    return roles;
  }

  // NUEVO: Obtener médicos por departamento
  async getMedicsByDepartment(idDepartamento: number) {
    // Buscar empleados del departamento que sean médicos
    const medicos = await this.prisma.medico.findMany({
      include: {
        empleado: true,
      },
      where: {
        empleado: {
          idDepartamento: idDepartamento,
        },
      },
    });
    return medicos;
  }

  // NUEVO: Obtener citas de un médico en una fecha dada
  async getAppointmentsByMedicAndDate(idMedico: number, date: string) {
    // Buscar citas del médico en la fecha dada (rango de 00:00 a 23:59)
    const start = new Date(date + 'T00:00:00.000Z');
    const end = new Date(date + 'T23:59:59.999Z');
    const citas = await this.prisma.cita.findMany({
      where: {
        idMedico: idMedico,
        fechaYHora: {
          gte: start,
          lte: end,
        },
      },
    });
    return citas;
  }

  // NUEVO: Obtener todas las citas de un médico (solo vigentes, no canceladas)
  async getAllAppointmentsByMedic(idMedico: number) {
    const citas = await this.prisma.cita.findMany({
      where: {
        idMedico: idMedico,
        estado: {
          not: 'C', // Excluir citas canceladas
        },
      },
      orderBy: {
        fechaYHora: 'asc', // Ordenar por fecha ascendente
      },
    });
    return citas;
  }

  // NUEVO: Crear cita
  async createCita(body: any) {
    // Destructura y convierte idPaciente a número
    const { idPaciente, idMedico, fechaYHora, estado, resumen } = body;
    // Validar que no exista cita solapada para el médico en esa franja
    const start = new Date(fechaYHora);
    const end = new Date(start.getTime() + 30 * 60000);
    const overlap = await this.prisma.cita.findFirst({
      where: {
        idMedico: idMedico,
        fechaYHora: {
          gte: start,
          lt: end,
        },
      },
    });
    if (overlap) {
      throw new BadRequestException('El médico ya tiene una cita en esa franja horaria');
    }
    // Crear la cita
    return this.prisma.cita.create({
      data: {
        idPaciente: Number(idPaciente),
        idMedico,
        fechaYHora: new Date(fechaYHora),
        estado,
        resumen,
      },
    });
  }

  // NUEVO: Obtener citas por paciente
  async getCitasByPatient(idPaciente: number) {
    const citas = await this.prisma.cita.findMany({
      where: {
        idPaciente: idPaciente,
      },
      orderBy: {
        fechaYHora: 'desc', // Ordenar por fecha más reciente primero
      },
    });
    return citas;
  }

  // NUEVO: Obtener cita específica por ID
  async getCitaById(idCita: number) {
    const cita = await this.prisma.cita.findUnique({
      where: {
        idCita: idCita,
      },
    });
    if (!cita) {
      throw new BadRequestException('Cita no encontrada');
    }
    return cita;
  }

  // NUEVO: Actualizar cita
  async updateCita(idCita: number, body: any) {
    const { estado, resumen } = body;

    // Verificar que la cita existe
    const citaExistente = await this.prisma.cita.findUnique({
      where: {
        idCita: idCita,
      },
    });

    if (!citaExistente) {
      throw new BadRequestException('Cita no encontrada');
    }

    // Actualizar solo los campos proporcionados
    const updateData: any = {};
    if (estado !== undefined) updateData.estado = estado;
    if (resumen !== undefined) updateData.resumen = resumen;

    return this.prisma.cita.update({
      where: {
        idCita: idCita,
      },
      data: updateData,
    });
  }

  // ===== MÉTODOS PARA DIAGNÓSTICOS =====

  async getDiagnoses() {
    const diagnosticos = await this.prisma.diagnostico.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
    return diagnosticos;
  }

  async addDiagnoses(idCita: number, diagnosticos: number[]) {
    // Verificar que la cita existe
    const cita = await this.prisma.cita.findUnique({
      where: { idCita },
    });
    if (!cita) {
      throw new BadRequestException('Cita no encontrada');
    }

    // Verificar que estamos en la franja horaria de la cita
    // NOTA: Para deshabilitar esta validación durante pruebas, comenta la siguiente línea:
    this.verifyAppointmentTimeWindow(cita.fechaYHora);

    // Verificar que los diagnósticos existen
    for (const idDiagnostico of diagnosticos) {
      const diagnostico = await this.prisma.diagnostico.findUnique({
        where: { idDiagnostico },
      });
      if (!diagnostico) {
        throw new BadRequestException(`Diagnóstico con ID ${idDiagnostico} no encontrado`);
      }
    }

    // Agregar diagnósticos a la cita
    const diagnosticosCita = await Promise.all(
      diagnosticos.map(idDiagnostico =>
        this.prisma.medico_dictamina_diagnostico.create({
          data: {
            idCita,
            idDiagnostico,
            idMedico: cita.idMedico,
          },
        })
      )
    );

    return diagnosticosCita;
  }

  // ===== MÉTODOS PARA PRESCRIPCIONES =====

  async addPrescriptions(
    idCita: number,
    prescripciones: Array<{ idMedicamento: number; posologia: string; esParticular: boolean }>,
  ) {
    // Verificar que la cita existe
    const cita = await this.prisma.cita.findUnique({
      where: { idCita },
    });
    if (!cita) {
      throw new BadRequestException('Cita no encontrada');
    }

    // Verificar que estamos en la franja horaria de la cita
    // NOTA: Para deshabilitar esta validación durante pruebas, comenta la siguiente línea:
    this.verifyAppointmentTimeWindow(cita.fechaYHora);

    // Obtener el médico de la cita
    const medico = await this.prisma.medico.findUnique({
      where: { idMedico: cita.idMedico },
    });
    if (!medico) {
      throw new BadRequestException('Médico no encontrado');
    }

    // Agregar prescripciones
    const prescripcionesCreadas = await Promise.all(
      prescripciones.map((prescripcion) =>
        this.prisma.medico_Preescribe_Medicamento.create({
          data: {
            idMedico: cita.idMedico,
            idMedicamento: prescripcion.idMedicamento,
            idCita,
            idPaciente: cita.idPaciente,
            posologia: prescripcion.posologia,
            particular: prescripcion.esParticular ? 'S' : 'N',
          },
        })
      )
    );

    return prescripcionesCreadas;
  }

  // ===== MÉTODOS PARA FINALIZAR CITA =====

  async finishAppointment(idCita: number, resumen: string) {
    // Verificar que la cita existe
    const cita = await this.prisma.cita.findUnique({
      where: { idCita },
    });
    if (!cita) {
      throw new BadRequestException('Cita no encontrada');
    }

    // Verificar que estamos en la franja horaria de la cita
    // NOTA: Para deshabilitar esta validación durante pruebas, comenta la siguiente línea:
    this.verifyAppointmentTimeWindow(cita.fechaYHora);

    // Verificar que la cita está en estado 'R' (Reservada)
    if (cita.estado !== 'R') {
      throw new BadRequestException('Solo se pueden finalizar citas en estado reservada');
    }

    // Actualizar la cita con el resumen y cambiar estado a 'A' (Asistida)
    const citaActualizada = await this.prisma.cita.update({
      where: { idCita },
      data: {
        resumen,
        estado: 'A',
      },
    });

    return citaActualizada;
  }

  // ===== MÉTODOS PARA ADMINISTRADORES =====

  async updateAppointment(idCita: number, updates: { idMedico?: number; fechaYHora?: string; estado?: string }) {
    // Verificar que la cita existe
    const cita = await this.prisma.cita.findUnique({
      where: { idCita },
    });
    if (!cita) {
      throw new BadRequestException('Cita no encontrada');
    }

    // Validar la fecha y hora si se está actualizando
    if (updates.fechaYHora) {
      this.validateTimeSlot(updates.fechaYHora);
    }

    // Validar el estado si se está actualizando
    if (updates.estado && !['R', 'A', 'P', 'C'].includes(updates.estado)) {
      throw new BadRequestException('Estado de cita inválido. Debe ser R, A, P o C');
    }

    // Actualizar la cita
    const updateData: any = {};
    if (updates.idMedico !== undefined) updateData.idMedico = updates.idMedico;
    if (updates.fechaYHora !== undefined) updateData.fechaYHora = new Date(updates.fechaYHora);
    if (updates.estado !== undefined) updateData.estado = updates.estado;

    return this.prisma.cita.update({
      where: { idCita },
      data: updateData,
    });
  }

  // ===== MÉTODOS AUXILIARES =====

  private verifyAppointmentTimeWindow(fechaYHora: Date) {
    const now = new Date();
    const appointmentTime = new Date(fechaYHora);
    const appointmentEnd = new Date(appointmentTime.getTime() + 30 * 60000); // +30 minutos

    if (now < appointmentTime || now > appointmentEnd) {
      throw new BadRequestException('Solo se pueden realizar acciones durante la franja horaria de la cita');
    }
  }

  private validateTimeSlot(fechaYHora: string) {
    const date = new Date(fechaYHora);
    const minutes = date.getMinutes();

    if (minutes !== 0 && minutes !== 30) {
      throw new BadRequestException('Las citas solo pueden ser en franjas exactas: HH:00 o HH:30');
    }
  }


}
