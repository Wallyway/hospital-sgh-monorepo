import {
  Injectable,
  BadRequestException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { EventPublisherService } from '../events/event.publisher';
import { DblinkService } from '../dblink/dblink.service';

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

    // TODO: Cuando los microservicios de dominio estén disponibles,
    // consultar si el usuario ya tiene una especialización incompatible.
    // Ejemplo (pseudocódigo):
    // if (role === UserRole.MEDIC && await isAdminInDomain(userId)) {
    //   throw new BadRequestException('Un usuario no puede ser MEDIC y ADMIN a la vez.');
    // }

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
