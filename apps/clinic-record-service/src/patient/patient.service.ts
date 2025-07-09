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
    if (!idPAdministrativo || !baseDepartamento) {
      throw new BadRequestException('Faltan datos para crear el paciente (idPAdministrativo o baseDepartamento)');
    }
    // 1. Crear paciente SIN idHistoriaClinica
    const paciente = await this.prisma.paciente.create({
      data: {
        idUsuario: userId,
        idPAdministrativo,
        baseDepartamento,
        // idHistoriaClinica se asignará después
        // FAfiliacion y Estado usan default
      },
    });

    // 2. Crear historia clínica asociada
    const historia = await this.prisma.historiaClinica.create({
      data: {
        idPaciente: paciente.idPaciente,
        // FInicio usa default (fecha de creación)
      },
    });

    // 3. Actualizar paciente con el id de la historia clínica
    const pacienteActualizado = await this.prisma.paciente.update({
      where: { idPaciente: paciente.idPaciente },
      data: { idHistoriaClinica: historia.idHistoriaClinica },
    });

    this.logger.log(
      `Paciente creado para idUsuario ${userId} con historia clínica ${historia.idHistoriaClinica}`,
    );
    return pacienteActualizado;
  }

  async getUserRoles(idUsuario: bigint): Promise<string[]> {
    const paciente = await this.prisma.paciente.findFirst({
      where: { idUsuario },
    });
    const roles: string[] = [];
    if (paciente) roles.push('PATIENT');
    return roles;
  }

  async getMedicalRecordsByUserId(idUsuario: bigint | string) {
    // Busca todos los pacientes de este usuario
    const pacientes = await this.prisma.paciente.findMany({
      where: { idUsuario: BigInt(idUsuario) },
      select: { idPaciente: true },
    });
    if (!pacientes.length) return [];
    // Busca todas las historias clínicas asociadas a esos pacientes
    const historias = await this.prisma.historiaClinica.findMany({
      where: {
        idPaciente: { in: pacientes.map(p => p.idPaciente) },
      },
      orderBy: { FInicio: 'asc' },
    });
    return historias;
  }

  // NUEVO: Obtener paciente por idUsuario
  async getPatientByUserId(idUsuario: bigint) {
    const paciente = await this.prisma.paciente.findFirst({
      where: { idUsuario },
    });
    return paciente;
  }

  // NUEVO: Obtener paciente por idPaciente
  async getPatientById(idPaciente: bigint) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { idPaciente: Number(idPaciente) },
    });
    return paciente;
  }
}
