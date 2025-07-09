import { Controller, Get, Param, NotFoundException, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

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
}
