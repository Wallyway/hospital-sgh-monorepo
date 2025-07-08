/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  BadRequestException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { EventPublisherService } from '../events/event.publisher';
import { DblinkService } from '../dblink/dblink.service';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

export enum UserRole {
  MEDIC = 'MEDIC',
  ADMIN = 'ADMIN',
  PATIENT = 'PATIENT',
}

@Injectable()
export class RolesService {
  private readonly logger = new Logger(RolesService.name);

  constructor(
    private dblinkService: DblinkService,
    private eventPublisherService: EventPublisherService,
    private configService: ConfigService,
  ) {}

  async specializeUserRole(
    userId: number,
    role: UserRole,
    userData?: any,
  ): Promise<string> {
    const userExists = await this.dblinkService.userExistsInAuthDb(userId);
    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }
    if (![UserRole.MEDIC, UserRole.ADMIN, UserRole.PATIENT].includes(role)) {
      throw new BadRequestException(
        'Only MEDIC, ADMIN and PATIENT roles are supported for now.',
      );
    }

    // Validación de especialización incompatible y duplicada
    if (role === UserRole.MEDIC || role === UserRole.ADMIN) {
      const cardiologyUrl = this.configService.get<string>(
        'CARDIOLOGY_SERVICE_URL',
      );
      try {
        const resp = await axios.get(
          `${cardiologyUrl}/employees/roles/${userId}`,
        );
        const roles = resp.data.roles as string[];
        if (
          (role === UserRole.MEDIC && roles.includes('ADMIN')) ||
          (role === UserRole.ADMIN && roles.includes('MEDIC'))
        ) {
          throw new BadRequestException(
            'No se puede especializar como MEDIC y ADMIN a la vez.',
          );
        }
        // Nueva validación: ya tiene el rol solicitado
        if (roles.includes(role)) {
          throw new BadRequestException(
            `El usuario ya está especializado como ${role}.`,
          );
        }
      } catch (err) {
        if (err instanceof BadRequestException) {
          throw err;
        }
        this.logger.error(
          'Error consultando roles en cardiology-service:',
          err?.message,
        );
        throw new BadRequestException(
          'No se pudo validar la especialización en cardiology-service.',
        );
      }
    }

    // Validación de duplicidad para PATIENT
    if (role === UserRole.PATIENT) {
      const clinicRecordUrl = this.configService.get<string>(
        'CLINIC_RECORD_SERVICE_URL',
      );
      try {
        const resp = await axios.get(
          `${clinicRecordUrl}/patients/roles/${userId}`,
        );
        const roles = resp.data.roles as string[];
        if (roles.includes('PATIENT')) {
          throw new BadRequestException(
            `El usuario ya está especializado como PATIENT.`,
          );
        }
      } catch (err) {
        this.logger.error(
          'Error consultando roles en clinic-record-service:',
          err?.message,
        );
        throw new BadRequestException(
          'No se pudo validar la especialización en clinic-record-service.',
        );
      }
    }

    let eventType = '';
    if (role === UserRole.MEDIC) eventType = 'DoctorSpecializationRequested';
    if (role === UserRole.ADMIN) eventType = 'AdminSpecializationRequested';
    if (role === UserRole.PATIENT) eventType = 'PatientSpecializationRequested';
    await this.eventPublisherService.publishEvent(eventType, {
      userId,
      role,
      timestamp: new Date().toISOString(),
      ...userData,
    });
    return `Specialization for user ${userId} as ${role} requested.`;
  }
}
