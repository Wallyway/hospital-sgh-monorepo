/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { EquipmentService } from './ equipment.service';
import { RequestEquipmentDto } from '../dto/request-equipment.dto';
import { EquipmentResponseDto } from '../dto/equipment-response.dto';

@Controller('equipment')
export class EquipmentController {
    constructor(private readonly equipmentService: EquipmentService) { }

    // GET /equipment - Listar todos los equipos
    @Get()
    async getAllEquipment(@Req() req: any) {
        const userId = req.headers['x-user-id'] || req.headers['X-User-Id'];
        return this.equipmentService.getAllEquipment(userId);
    }

    // POST /equipment/request - Solicitar un equipo
    @Post('request')
    async requestEquipment(
        @Body() requestDto: RequestEquipmentDto,
        @Req() req: any,
    ): Promise<any> {
        // En el futuro, extraer el usuario autenticado de req
        return this.equipmentService.requestEquipment(requestDto, req.user);
    }

    // Endpoint interno para poblar equipos por defecto
    @Post('internal/seed')
    async seedEquipment() {
        return this.equipmentService.seedDefaultEquipment();
    }
}
