/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RolesService {
  private readonly logger = new Logger(RolesService.name);
  private readonly rolesServiceUrl: string;

  constructor(private configService: ConfigService) {
    this.rolesServiceUrl = this.configService.get<string>(
      'ROLES_SERVICE_URL',
      'http://localhost:3002/roles',
    );
  }

  async assignRoleToUser(idUser: number, role: string) {
    try {
      // LOG para depuración
      console.log('[ROLES SERVICE] Llamando a:', this.rolesServiceUrl);
      console.log('[ROLES SERVICE] Payload:', { idUser, role });
      await axios.post(this.rolesServiceUrl, {
        idUser,
        role,
      });
      this.logger.log(
        `Assigned role ${role} to user ${idUser} via RolesService`,
      );
    } catch (error) {
      this.logger.error(
        `Failed to assign role ${role} to user ${idUser}: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Could not assign role to user in roles microservice',
      );
    }
  }
}
