/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
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
}
