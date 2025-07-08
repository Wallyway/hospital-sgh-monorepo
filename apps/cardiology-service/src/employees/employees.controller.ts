import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
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
      throw new NotFoundException('No existe PAdministrativo para ese empleado');
    }
    return result;
  }
}
