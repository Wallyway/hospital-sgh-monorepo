/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Param,
  Get,
  ForbiddenException,
  Req,
  UseGuards,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from '../../dto/login.dto.js';
import { ForgotPasswordDto } from '../../dto/forgot-password.dto.js';
import { ResetPasswordDto } from '../../dto/reset-password.dto.js';
import { CreateUserAdminDto } from '../../dto/create-user-admin.dto.js';
import { UsersService } from '../users/users.service.js';
import { RolesService } from '../roles/roles.service.js';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import axios from 'axios';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private rolesService: RolesService,
  ) { }

  @ApiOperation({ summary: 'Generar super usuario temporal (solo desarrollo)' })
  @ApiResponse({
    status: 201,
    description: 'Super usuario generado en consola y base de datos',
  })
  @ApiBody({ type: CreateUserAdminDto })
  @Post('dev/bootstrap-superuser')
  async bootstrapSuperUser(@Body() dto: CreateUserAdminDto) {
    // Verifica si ya existe el usuario
    let user = await this.usersService.user({ email: dto.email });
    if (!user) {
      // Si no se especifica idUsuario, genera uno aleatorio (simulando cédula)
      const idUsuario =
        dto.idUsuario ||
        Math.floor(100000000 + Math.random() * 900000000).toString();
      // Crea el usuario en la base de datos
      user = await this.usersService.createUserByAdmin({
        ...dto,
        idUsuario: idUsuario.toString(),
      });
    }
    console.log('SUPER USER GENERATED:');
    console.log(`Email: ${user.email}`);
    console.log(`Password: ${dto.password}`);
    return {
      message:
        'Super usuario generado y guardado en la base de datos (o ya existente). Credenciales impresas en consola.',
      email: user.email,
      password: dto.password,
      idUsuario: user.idUsuario.toString(),
    };
  }

  @ApiOperation({ summary: 'Login de usuario (rol: MEDIC)' })
  @ApiResponse({ status: 201, description: 'JWT de acceso' })
  @ApiBody({
    schema: { example: { email: 'user@mail.com', password: 'password123' } },
  })
  @Post('medic/login')
  async loginMedic(@Body() loginDto: Omit<LoginDto, 'role'>) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
      'MEDIC',
    );
    return this.authService.login(user, 'MEDIC');
  }

  @ApiOperation({ summary: 'Login de usuario (rol: PATIENT)' })
  @ApiResponse({ status: 201, description: 'JWT de acceso' })
  @ApiBody({
    schema: { example: { email: 'user@mail.com', password: 'password123' } },
  })
  @Post('patient/login')
  async loginPatient(@Body() loginDto: Omit<LoginDto, 'role'>) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
      'PATIENT',
    );
    return this.authService.login(user, 'PATIENT');
  }

  @ApiOperation({ summary: 'Login de usuario (rol: ADMIN)' })
  @ApiResponse({ status: 201, description: 'JWT de acceso' })
  @ApiBody({
    schema: { example: { email: 'user@mail.com', password: 'password123' } },
  })
  @Post('admin/login')
  async loginAdmin(@Body() loginDto: Omit<LoginDto, 'role'>) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
      'ADMIN',
    );
    return this.authService.login(user, 'ADMIN');
  }

  @ApiOperation({ summary: 'Login de super usuario (ROOT)' })
  @ApiResponse({ status: 201, description: 'JWT de acceso' })
  @ApiBody({
    schema: { example: { email: 'root@mail.com', password: 'rootpass' } },
  })
  @Post('root/login')
  async loginRoot(@Body() loginDto: Omit<LoginDto, 'role'>) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
      'ROOT',
    );
    return this.authService.login(user, 'ROOT');
  }

  @ApiOperation({
    summary: 'Solicitar recuperación de contraseña (rol: MEDIC)',
  })
  @ApiResponse({ status: 200, description: 'Mensaje de éxito' })
  @ApiBody({ schema: { example: { email: 'user@mail.com' } } })
  @Post('medic/forgot-password')
  async forgotPasswordMedic(
    @Body() forgotPasswordDto: Omit<ForgotPasswordDto, 'role'>,
  ) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @ApiOperation({
    summary: 'Solicitar recuperación de contraseña (rol: PATIENT)',
  })
  @ApiResponse({ status: 200, description: 'Mensaje de éxito' })
  @ApiBody({ schema: { example: { email: 'user@mail.com' } } })
  @Post('patient/forgot-password')
  async forgotPasswordPatient(
    @Body() forgotPasswordDto: Omit<ForgotPasswordDto, 'role'>,
  ) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @ApiOperation({
    summary: 'Solicitar recuperación de contraseña (rol: ADMIN)',
  })
  @ApiResponse({ status: 200, description: 'Mensaje de éxito' })
  @ApiBody({ schema: { example: { email: 'user@mail.com' } } })
  @Post('admin/forgot-password')
  async forgotPasswordAdmin(
    @Body() forgotPasswordDto: Omit<ForgotPasswordDto, 'role'>,
  ) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @ApiOperation({ summary: 'Solicitar recuperación de contraseña (rol: ROOT)' })
  @ApiResponse({ status: 200, description: 'Mensaje de éxito' })
  @ApiBody({ schema: { example: { email: 'root@mail.com' } } })
  @Post('root/forgot-password')
  async forgotPasswordRoot(
    @Body() forgotPasswordDto: Omit<ForgotPasswordDto, 'role'>,
  ) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @ApiOperation({ summary: 'Restablecer contraseña con token (rol: MEDIC)' })
  @ApiResponse({ status: 200, description: 'Contraseña restablecida' })
  @ApiBody({
    schema: { example: { token: 'reset-token', newPassword: 'newpass123' } },
  })
  @Post('medic/reset-password')
  async resetPasswordMedic(
    @Body() resetPasswordDto: Omit<ResetPasswordDto, 'role'>,
  ) {
    return this.authService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
  }

  @ApiOperation({ summary: 'Restablecer contraseña con token (rol: PATIENT)' })
  @ApiResponse({ status: 200, description: 'Contraseña restablecida' })
  @ApiBody({
    schema: { example: { token: 'reset-token', newPassword: 'newpass123' } },
  })
  @Post('patient/reset-password')
  async resetPasswordPatient(
    @Body() resetPasswordDto: Omit<ResetPasswordDto, 'role'>,
  ) {
    return this.authService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
  }

  @ApiOperation({ summary: 'Restablecer contraseña con token (rol: ADMIN)' })
  @ApiResponse({ status: 200, description: 'Contraseña restablecida' })
  @ApiBody({
    schema: { example: { token: 'reset-token', newPassword: 'newpass123' } },
  })
  @Post('admin/reset-password')
  async resetPasswordAdmin(
    @Body() resetPasswordDto: Omit<ResetPasswordDto, 'role'>,
  ) {
    return this.authService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
  }

  @ApiOperation({ summary: 'Restablecer contraseña con token (rol: ROOT)' })
  @ApiResponse({ status: 200, description: 'Contraseña restablecida' })
  @ApiBody({
    schema: { example: { token: 'reset-token', newPassword: 'newpass123' } },
  })
  @Post('root/reset-password')
  async resetPasswordRoot(
    @Body() resetPasswordDto: Omit<ResetPasswordDto, 'role'>,
  ) {
    return this.authService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
  }

  @ApiOperation({ summary: 'Crear usuario por rol (root)' })
  @ApiParam({ name: 'role', enum: ['PATIENT', 'MEDIC', 'ADMIN'] })
  @ApiResponse({ status: 201, description: 'Usuario creado y rol asignado' })
  @ApiBody({ type: CreateUserAdminDto })
  @Post('root/create-user/:role')
  async createUserByAdmin(
    @Param('role') role: string,
    @Body() createUserAdminDto: CreateUserAdminDto,
  ) {
    const validRoles = ['PATIENT', 'MEDIC', 'ADMIN'];
    const upperRole = role.toUpperCase();
    if (!validRoles.includes(upperRole)) {
      throw new BadRequestException('Invalid role');
    }
    // Si el rol es MEDIC o ADMIN, sueldo es obligatorio
    if (
      (upperRole === 'MEDIC' || upperRole === 'ADMIN') &&
      (typeof createUserAdminDto['sueldo'] !== 'number' ||
        createUserAdminDto['sueldo'] <= 0)
    ) {
      throw new BadRequestException(
        'El campo sueldo es obligatorio y debe ser un número positivo para MEDIC o ADMIN.',
      );
    }
    // Validación de especialización incompatible antes de crear el usuario
    if (upperRole === 'MEDIC' || upperRole === 'ADMIN') {
      try {
        const cardiologyUrl =
          process.env.CARDIOLOGY_SERVICE_URL || 'http://localhost:3003';
        const resp = await axios.get(
          `${cardiologyUrl}/employees/roles/${createUserAdminDto.idUsuario}`,
        );
        const roles = resp.data.roles as string[];
        if (
          (upperRole === 'MEDIC' && roles.includes('ADMIN')) ||
          (upperRole === 'ADMIN' && roles.includes('MEDIC'))
        ) {
          throw new BadRequestException(
            'No se puede especializar como MEDIC y ADMIN a la vez.',
          );
        }
      } catch (err) {
        throw new BadRequestException(
          'No se pudo validar la especialización en cardiology-service.',
        );
      }
    }
    const user = await this.usersService.createUserByAdmin(createUserAdminDto);
    try {
      // Solo pasa el sueldo al role-assignment-service, no lo guarda en la base de datos de auth
      const rolePayload = { ...createUserAdminDto };
      if (upperRole !== 'MEDIC' && upperRole !== 'ADMIN') {
        delete rolePayload['sueldo'];
      }
      await this.rolesService.assignRoleToUser(
        user.idUsuario.toString(),
        upperRole,
        rolePayload,
      );
      return {
        ...user,
        idUsuario: user.idUsuario.toString(),
      };
    } catch (err) {
      // Rollback manual: si falla la especialización, elimina el usuario creado
      await this.usersService.deleteUser({ idUsuario: user.idUsuario });
      throw err;
    }
  }

  @ApiOperation({ summary: 'Obtener todos los usuarios (solo ROOT)' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios' })
  @Get('root/users')
  async getAllUsers(@Req() req) {
    const userRole = req.headers['x-user-role'];
    if (userRole !== 'ROOT') {
      throw new ForbiddenException('Solo el usuario ROOT puede acceder');
    }
    return this.usersService.users({});
  }

  @ApiOperation({ summary: 'Crear paciente por ADMIN' })
  @ApiResponse({ status: 201, description: 'Paciente creado y rol asignado' })
  @ApiBody({ type: CreateUserAdminDto })
  @Post('admin/create-patient')
  async createPatientByAdmin(@Body() createUserAdminDto: CreateUserAdminDto) {
    // Validación de campos obligatorios
    if (!createUserAdminDto.idPAdministrativo) {
      throw new BadRequestException('idPAdministrativo es obligatorio');
    }
    // Validación de especialización incompatible antes de crear el usuario
    try {
      const cardiologyUrl = process.env.CARDIOLOGY_SERVICE_URL || 'http://localhost:3003';
      const resp = await axios.get(
        `${cardiologyUrl}/employees/roles/${createUserAdminDto.idUsuario}`,
      );
      const roles = resp.data.roles as string[];
      if (roles.includes('PATIENT')) {
        throw new BadRequestException('El usuario ya es paciente.');
      }
    } catch (err) {
      throw new BadRequestException('No se pudo validar la especialización en cardiology-service.');
    }
    const user = await this.usersService.createUserByAdmin(createUserAdminDto);
    try {
      // Lógica para especializar como paciente (puedes emitir evento o llamar a microservicio)
      // Aquí solo se simula la especialización
      // await this.rolesService.assignRoleToUser(user.idUsuario.toString(), 'PATIENT', createUserAdminDto);
      return {
        ...user,
        idUsuario: user.idUsuario.toString(),
      };
    } catch (err) {
      // Rollback manual: si falla la especialización, elimina el usuario creado
      await this.usersService.deleteUser({ idUsuario: user.idUsuario });
      throw err;
    }
  }
}
