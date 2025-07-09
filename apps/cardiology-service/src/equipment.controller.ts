import { Body, Controller, Post, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('equipment')
export class EquipmentController {
    constructor(private readonly prisma: PrismaService) { }

    @Post('internal/create')
    async createEquipment(@Body() data: any) {
        // data: { idDepartamento, nombre, estado }
        const equipo = await this.prisma.equipamiento.create({ data });
        return equipo;
    }

    @Get()
    async getAllEquipment() {
        return this.prisma.equipamiento.findMany();
    }
} 