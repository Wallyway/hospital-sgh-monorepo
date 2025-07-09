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
  ) { }

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
        if (err instanceof BadRequestException) {
          throw err;
        }
        this.logger.error(
          'Error consultando roles en clinic-record-service:',
          err?.message,
        );
        throw new BadRequestException(
          err?.response?.data?.message || 'No se pudo validar la especialización en clinic-record-service.',
        );
      }
    }

    // --- INICIO INTEGRACIÓN DATOS DE ADMIN/MEDIC PARA PACIENTE ---
    let idPAdministrativo: number | undefined;
    let idMedico: number | undefined;
    let baseDepartamento: string | undefined;
    if (role === UserRole.PATIENT && userData) {
      // Determinar si quien especializa es admin o medic
      const especializadorId = userData.adminId || userData.medicId;
      const especializadorRol = userData.adminId ? 'ADMIN' : userData.medicId ? 'MEDIC' : undefined;
      if (!especializadorId || !especializadorRol) {
        throw new BadRequestException('Falta el id y rol del especializador (adminId o medicId)');
      }
      // Consultar empleado en cardiology-service
      const cardiologyUrl = this.configService.get<string>('CARDIOLOGY_SERVICE_URL');
      let empleado;
      try {
        const resp = await axios.get(`${cardiologyUrl}/employees/by-user/${especializadorId}`);
        empleado = resp.data;
      } catch (err) {
        throw new BadRequestException('No se pudo obtener el empleado del especializador');
      }
      if (!empleado || !empleado.idEmpleado || !empleado.idDepartamento) {
        throw new BadRequestException('El especializador no tiene empleado o departamento asignado');
      }
      // Según el rol, obtener idPAdministrativo o idMedico
      if (especializadorRol === 'ADMIN') {
        try {
          const resp = await axios.get(`${cardiologyUrl}/employees/padministrativo/by-employee/${empleado.idEmpleado}`);
          idPAdministrativo = resp.data.idPAdministrativo;
        } catch (err) {
          throw new BadRequestException('No se pudo obtener el idPAdministrativo del admin');
        }
        if (!idPAdministrativo) {
          throw new BadRequestException('El admin no tiene idPAdministrativo asignado');
        }
      } else if (especializadorRol === 'MEDIC') {
        try {
          const resp = await axios.get(`${cardiologyUrl}/employees/medico/by-employee/${empleado.idEmpleado}`);
          idMedico = resp.data.idMedico;
        } catch (err) {
          throw new BadRequestException('No se pudo obtener el idMedico del medic');
        }
        if (!idMedico) {
          throw new BadRequestException('El medic no tiene idMedico asignado');
        }
      }
      // Consultar nombre del departamento
      const departmentUrl = this.configService.get<string>('DEPARTMENT_SERVICE_URL', 'http://localhost:3005');
      this.logger.log(`Consultando departamento: ${departmentUrl}/departments/${empleado.idDepartamento}`);
      try {
        const resp = await axios.get(`${departmentUrl}/departments/${empleado.idDepartamento}`);
        baseDepartamento = resp.data.Nombre;
      } catch (err) {
        throw new BadRequestException('No se pudo obtener el nombre del departamento');
      }
    }
    // --- FIN INTEGRACIÓN DATOS DE ADMIN/MEDIC PARA PACIENTE ---

    let eventType = '';
    if (role === UserRole.MEDIC) eventType = 'DoctorSpecializationRequested';
    if (role === UserRole.ADMIN) eventType = 'AdminSpecializationRequested';
    if (role === UserRole.PATIENT) eventType = 'PatientSpecializationRequested';
    // Incluye los datos obtenidos en el payload del evento
    const eventPayload = {
      userId,
      role,
      timestamp: new Date().toISOString(),
      ...userData,
      ...(idPAdministrativo && { idPAdministrativo }),
      ...(idMedico && { idMedico }),
      ...(baseDepartamento && { baseDepartamento }),
    };
    await this.eventPublisherService.publishEvent(eventType, eventPayload);
    return `Specialization for user ${userId} as ${role} requested.`;
  }
}
