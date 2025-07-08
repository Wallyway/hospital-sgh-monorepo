/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/index.js';

@Injectable()
export class PatientService {
  private readonly logger = new Logger(PatientService.name);
  private readonly prisma = new PrismaClient();

  async createPatientFromEvent(payload: any) {
    const { userId, idPAdministrativo, baseDepartamento } = payload;
    // Validar duplicidad: un usuario no puede ser patient dos veces
    const existing = await this.prisma.paciente.findFirst({
      where: { idUsuario: userId },
    });
    if (existing) {
      this.logger.warn(`Paciente con idUsuario ${userId} ya existe.`);
      throw new BadRequestException(
        `El usuario ya está especializado como PATIENT.`,
      );
    }
    // Crear paciente (la historia clínica se crea por trigger en la BD)
    const paciente = await this.prisma.paciente.create({
      data: {
        idUsuario: userId,
        idPAdministrativo,
        baseDepartamento,
        // idHistoriaClinica se asigna por trigger
        // FAfiliacion y Estado usan default
      },
    });
    this.logger.log(`Paciente creado para idUsuario ${userId}`);
    return paciente;
  }

  async getUserRoles(idUsuario: bigint): Promise<string[]> {
    const paciente = await this.prisma.paciente.findFirst({
      where: { idUsuario },
    });
    const roles: string[] = [];
    if (paciente) roles.push('PATIENT');
    return roles;
  }
}
