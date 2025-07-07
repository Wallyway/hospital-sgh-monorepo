import {
  Controller,
  Post,
  Param,
  ParseIntPipe,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { RolesService, UserRole } from './roles.service';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Solicitar especialización de rol para un usuario' })
  @ApiParam({
    name: 'idUser',
    type: Number,
    description: 'ID del usuario (cédula)',
  })
  @ApiParam({
    name: 'role',
    enum: ['MEDIC', 'ADMIN', 'PATIENT'],
    description: 'Rol a especializar',
  })
  @ApiBody({
    schema: {
      example: {
        email: 'user@mail.com',
        password: 'password123',
        name: 'Juan',
        address: 'Calle 123',
        gender: 'M',
        birthDate: '1990-01-01',
        idUser: 123456789,
        sueldo: 3500000,
      },
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
        name: { type: 'string' },
        address: { type: 'string' },
        gender: { type: 'string' },
        birthDate: { type: 'string', format: 'date' },
        idUser: { type: 'integer' },
        sueldo: {
          type: 'integer',
          description: 'Obligatorio para MEDIC y ADMIN. Opcional para PATIENT.',
        },
      },
      required: [
        'email',
        'password',
        'name',
        'address',
        'gender',
        'birthDate',
        'idUser',
      ],
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Especialización solicitada correctamente.',
  })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  @ApiResponse({ status: 400, description: 'Rol no soportado.' })
  @Post(':idUser/:role')
  async specializeRole(
    @Param('idUser', ParseIntPipe) idUser: number,
    @Param('role') role: string,
    @Body() userData: any,
  ) {
    const upperRole = role.toUpperCase();
    if (!(upperRole in UserRole)) {
      throw new BadRequestException(`Role '${role}' is not supported.`);
    }
    const message = await this.rolesService.specializeUserRole(
      idUser,
      upperRole as UserRole,
      userData,
    );
    return { message };
  }
}
