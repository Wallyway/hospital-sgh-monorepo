import { Controller, Get, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get('roles/:idUsuario')
    async getUserRoles(@Param('idUsuario') idUsuario: string) {
        const roles = await this.employeesService.getUserRoles(BigInt(idUsuario));
        return { roles };
    }
} 