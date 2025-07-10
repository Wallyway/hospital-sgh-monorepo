/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Req,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('roles/:idUsuario')
  async getUserRoles(@Param('idUsuario') idUsuario: string) {
    const roles = await this.patientService.getUserRoles(BigInt(idUsuario));
    return { roles };
  }

  @Post()
  async createPatient(@Body() payload: any) {
    const paciente = await this.patientService.createPatientFromEvent(payload);
    // Convierte todos los BigInt a string antes de responder
    return JSON.parse(
      JSON.stringify(paciente, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value,
      ),
    );
  }

  @Get('medical-records')
  async getMedicalRecords(@Req() req) {
    const userId = req.headers['x-user-id'];
    if (!userId) {
      throw new ForbiddenException(
        'Solo el paciente autenticado puede consultar sus historias clínicas',
      );
    }
    const records = await this.patientService.getMedicalRecordsByUserId(userId);
    if (!records || records.length === 0) {
      throw new NotFoundException('No se encontraron historias clínicas');
    }
    return records;
  }

  // NUEVO: Obtener paciente por idUsuario
  @Get('by-user/:idUsuario')
  async getPatientByUserId(@Param('idUsuario') idUsuario: string) {
    const paciente = await this.patientService.getPatientByUserId(
      BigInt(idUsuario),
    );
    if (!paciente) {
      throw new NotFoundException('Paciente no encontrado');
    }
    // Convierte todos los BigInt a string antes de responder
    return JSON.parse(
      JSON.stringify(paciente, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value,
      ),
    );
  }

  // NUEVO: Obtener paciente por idPaciente
  @Get('by-id/:idPaciente')
  async getPatientById(@Param('idPaciente') idPaciente: string) {
    const paciente = await this.patientService.getPatientById(
      BigInt(idPaciente),
    );
    if (!paciente) {
      throw new NotFoundException('Paciente no encontrado');
    }
    // Convierte todos los BigInt a string antes de responder
    return JSON.parse(
      JSON.stringify(paciente, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value,
      ),
    );
  }
}
