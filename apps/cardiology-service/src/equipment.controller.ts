/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Post,
  Get,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly prisma: PrismaService) {}

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

  @Post('request')
  async requestEquipment(@Body() data: any) {
    console.log(
      '[CardiologyService] Body recibido en /equipment/request:',
      data,
    );
    // data: { idUsuario, idEquipamiento, FPrestamo, FDevolucion }
    const { idUsuario, idEquipamiento, FPrestamo, FDevolucion } = data;
    // 1. Validar que el equipo esté disponible
    const equipo = await this.prisma.equipamiento.findUnique({
      where: { idEquipamiento },
    });
    if (!equipo) throw new BadRequestException('Equipo no encontrado');
    if (equipo.estado !== 'D')
      throw new BadRequestException('El equipo no está disponible');
    // 2. Obtener idMedico a partir de idUsuario
    const empleado = await this.prisma.empleado.findFirst({
      where: { idUsuario: BigInt(idUsuario) },
    });
    if (!empleado)
      throw new BadRequestException('Empleado no encontrado para ese usuario');
    const medico = await this.prisma.medico.findFirst({
      where: { idEmpleado: empleado.idEmpleado },
    });
    if (!medico) throw new BadRequestException('No es un médico válido');
    // 3. Actualizar estado del equipo a 'P'
    await this.prisma.equipamiento.update({
      where: { idEquipamiento },
      data: { estado: 'P' },
    });
    // 4. Crear registro en Medico_Equipo
    const registro = await this.prisma.medico_Equipo.create({
      data: {
        idMedico: medico.idMedico,
        idEquipamiento,
        FPrestamo: new Date(FPrestamo),
        FDevolucion: new Date(FDevolucion),
      },
    });
    return registro;
  }
}
