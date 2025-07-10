import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  NotFoundException,
  Query,
  Body,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { PrismaService } from '../prisma.service';

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly prisma: PrismaService,
  ) { }

  @Get('roles/:idUsuario')
  async getUserRoles(@Param('idUsuario') idUsuario: string) {
    const roles = await this.employeesService.getUserRoles(BigInt(idUsuario));
    return { roles };
  }

  @Get('by-user/:idUsuario')
  async getByUser(@Param('idUsuario') idUsuario: string) {
    // Suponiendo que tienes acceso a PrismaService aquí
    const prisma = this.employeesService['prisma'];
    const empleado = await prisma.empleado.findFirst({
      where: { idUsuario: BigInt(idUsuario) },
    });
    if (!empleado) {
      throw new NotFoundException('No existe empleado para ese usuario');
    }
    return empleado;
  }

  @Get('padministrativo/by-employee/:idEmpleado')
  async getPAdministrativoByEmpleado(@Param('idEmpleado') idEmpleado: string) {
    // Suponiendo que tienes acceso a PrismaService aquí
    const prisma = this.employeesService['prisma'];
    const result = await prisma.pAdministrativo.findFirst({
      where: { idEmpleado: Number(idEmpleado) },
    });
    if (!result) {
      throw new NotFoundException(
        'No existe PAdministrativo para ese empleado',
      );
    }
    return result;
  }

  // NUEVO: Obtener médicos por departamento
  @Get('medics')
  async getMedicsByDepartment(@Query('department') department: string) {
    return this.employeesService.getMedicsByDepartment(Number(department));
  }

  // NUEVO: Obtener citas de un médico en una fecha dada
  @Get('medics/:idMedico/appointments')
  async getAppointmentsByMedicAndDate(
    @Param('idMedico') idMedico: string,
    @Query('date') date: string,
  ) {
    if (date) {
      return this.employeesService.getAppointmentsByMedicAndDate(
        Number(idMedico),
        date,
      );
    } else {
      // Si no hay fecha, obtener todas las citas del médico
      return this.employeesService.getAllAppointmentsByMedic(Number(idMedico));
    }
  }

  // NUEVO: Crear cita
  @Post('/citas')
  async createCita(@Body() body: any) {
    // Espera: { idPaciente, idMedico, fechaYHora, estado, resumen }
    return this.employeesService.createCita(body);
  }

  // NUEVO: Obtener citas por paciente
  @Get('/citas')
  async getCitasByPatient(@Query('patient') patient: string) {
    return this.employeesService.getCitasByPatient(Number(patient));
  }

  // ENDPOINT para obtener todas las citas de un paciente por idPaciente (para microservicios)
  @Get('/citas/by-paciente/:idPaciente')
  async getCitasByPacienteId(@Param('idPaciente') idPaciente: string) {
    return this.employeesService.getCitasByPatient(Number(idPaciente));
  }

  // NUEVO: Obtener cita específica por ID
  @Get('/citas/:id')
  async getCitaById(@Param('id') id: string) {
    return this.employeesService.getCitaById(Number(id));
  }

  // NUEVO: Actualizar cita (para cancelar)
  @Patch('/citas/:id')
  async updateCita(@Param('id') id: string, @Body() body: any) {
    return this.employeesService.updateCita(Number(id), body);
  }

  @Get('medics/:idMedico')
  async getMedicById(@Param('idMedico') idMedico: string) {
    const medic = await this.prisma.medico.findUnique({
      where: { idMedico: Number(idMedico) },
      include: { empleado: true }, // Para obtener idDepartamento
    });
    if (!medic) {
      throw new NotFoundException('Médico no encontrado');
    }
    // Devolver idDepartamento junto con los datos del médico
    return {
      ...medic,
      idDepartamento: medic.empleado?.idDepartamento,
    };
  }

  // NUEVO: Obtener médico por idMedico y devolver su idUsuario
  @Get('medics/:idMedico/user-id')
  async getMedicUserId(@Param('idMedico') idMedico: string) {
    const medic = await this.prisma.medico.findUnique({
      where: { idMedico: Number(idMedico) },
      include: { empleado: true },
    });
    if (!medic) {
      throw new NotFoundException('Médico no encontrado');
    }
    return {
      idMedico: medic.idMedico,
      idEmpleado: medic.idEmpleado,
      idUsuario: medic.empleado.idUsuario,
    };
  }

  // ===== ENDPOINTS PARA DIAGNÓSTICOS =====

  @Get('diagnoses')
  async getDiagnoses() {
    return this.employeesService.getDiagnoses();
  }

  @Post('appointments/:id/diagnoses')
  async addDiagnoses(
    @Param('id') id: string,
    @Body() body: { diagnosticos: number[] },
  ) {
    return this.employeesService.addDiagnoses(Number(id), body.diagnosticos);
  }

  // ===== ENDPOINTS PARA PRESCRIPCIONES =====

  @Post('appointments/:id/prescriptions')
  async addPrescriptions(
    @Param('id') id: string,
    @Body()
    body: {
      prescripciones: Array<{
        idMedicamento: number;
        posologia: string;
        esParticular: boolean;
      }>;
    },
  ) {
    return this.employeesService.addPrescriptions(
      Number(id),
      body.prescripciones,
    );
  }

  // ===== ENDPOINTS PARA FINALIZAR CITA =====

  @Post('appointments/:id/finish')
  async finishAppointment(
    @Param('id') id: string,
    @Body() body: { resumen: string },
  ) {
    return this.employeesService.finishAppointment(Number(id), body.resumen);
  }

  // ===== ENDPOINTS PARA ADMINISTRADORES =====

  @Patch('appointments/:id')
  async updateAppointment(
    @Param('id') id: string,
    @Body() body: { idMedico?: number; fechaYHora?: string; estado?: string },
  ) {
    return this.employeesService.updateAppointment(Number(id), body);
  }
}
