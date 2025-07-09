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
}
