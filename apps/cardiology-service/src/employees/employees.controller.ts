import { Controller, Get, Post, Patch, Param, NotFoundException, Query, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { PrismaService } from '../prisma.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService, private readonly prisma: PrismaService) { }

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
    return this.employeesService.getAppointmentsByMedicAndDate(Number(idMedico), date);
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
}
