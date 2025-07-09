/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { EquipmentService } from './equipment.service';
import { RequestEquipmentDto } from '../dto/request-equipment.dto';
import { EquipmentResponseDto } from '../dto/equipment-response.dto';

@ApiTags('Equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'List all available equipment (MEDIC only)' })
  @ApiResponse({
    status: 200,
    description: 'List of equipment',
    type: [EquipmentResponseDto],
  })
  @Get()
  async getAllEquipment(@Req() req: any) {
    const userId = req.headers['x-user-id'] || req.headers['X-User-Id'];
    return this.equipmentService.getAllEquipment(userId);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Request equipment (MEDIC only)' })
  @ApiBody({ type: RequestEquipmentDto })
  @ApiResponse({ status: 201, description: 'Equipment successfully requested' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden: Only MEDIC can request equipment',
  })
  @Post('request')
  async requestEquipment(
    @Body() requestDto: RequestEquipmentDto,
  ): Promise<any> {
    if (!requestDto.idUsuario) {
      throw new Error('idUsuario is required');
    }
    return this.equipmentService.requestEquipment(
      requestDto,
      requestDto.idUsuario,
    );
  }

  @ApiOperation({ summary: '[Internal] Seed default equipment' })
  @ApiResponse({ status: 201, description: 'Default equipment seeded' })
  @Post('internal/seed')
  async seedEquipment() {
    return this.equipmentService.seedDefaultEquipment();
  }
}
