import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('departments')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }

    @Post()
    async create(@Body() body: { Nombre: string; Ubicacion: string }) {
        // Aquí podrías agregar lógica para que solo el super usuario pueda crear
        return this.departmentService.create(body.Nombre, body.Ubicacion);
    }

    @Get()
    async findAll() {
        return this.departmentService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.departmentService.findById(Number(id));
    }

    @Get('by-name/:nombre')
    async findByName(@Param('nombre') Nombre: string) {
        return this.departmentService.findByName(Nombre);
    }
}
