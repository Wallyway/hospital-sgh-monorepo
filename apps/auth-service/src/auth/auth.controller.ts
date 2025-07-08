/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */

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
  Patch,
  NotFoundException,
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

  /**
   * @swagger
   * /auth/root/create-user/:role:
   *   post:
   *     summary: Crear usuario por rol (solo ROOT)
   *     description: Crea un usuario con rol MEDIC o ADMIN. Valida que el idDepartamento exista en department-service y que el sueldo sea positivo. Si el departamento no existe, retorna un error. Si la especialización falla, hace rollback.
   *     parameters:
   *       - in: path
   *         name: role
   *         required: true
   *         schema:
   *           type: string
   *           enum: [MEDIC, ADMIN]
   *         description: Rol del usuario a crear
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUserAdminDto'
   *           example:
   *             idUsuario: 123456789
   *             nombre: "Dr. House"
   *             email: "house@mail.com"
   *             password: "password123"
   *             genero: "M"
   *             direccion: "Calle 123"
   *             fechaNacimiento: "1970-01-01"
   *             sueldo: 5000000
   *             idDepartamento: 1
   *     responses:
   *       201:
   *         description: Usuario creado y rol asignado
   *         content:
   *           application/json:
   *             example:
   *               idUsuario: "123456789"
   *               nombre: "Dr. House"
   *               email: "house@mail.com"
   *               departamento: "Cardiologia"
   *       400:
   *         description: Error de validación o departamento inexistente
   */
  @ApiOperation({ summary: 'Crear usuario por rol (root)' })
  @ApiParam({ name: 'role', enum: ['MEDIC', 'ADMIN'] })
  @ApiResponse({ status: 201, description: 'Usuario creado y rol asignado' })
  @ApiBody({ type: CreateUserAdminDto })
  @Post('root/create-user/:role')
  async createUserByAdmin(
    @Param('role') role: string,
    @Body() createUserAdminDto: CreateUserAdminDto,
  ) {
    const validRoles = ['MEDIC', 'ADMIN'];
    const upperRole = role.toUpperCase();
    if (!validRoles.includes(upperRole)) {
      throw new BadRequestException(
        'Solo se permite crear usuarios con rol MEDIC o ADMIN',
      );
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
    // Si el rol es MEDIC o ADMIN, idDepartamento es obligatorio
    if (
      (upperRole === 'MEDIC' || upperRole === 'ADMIN') &&
      (createUserAdminDto.idDepartamento === undefined ||
        createUserAdminDto.idDepartamento === null)
    ) {
      throw new BadRequestException(
        'El campo idDepartamento es obligatorio para crear un usuario MEDIC o ADMIN.',
      );
    }
    // Validar que el idDepartamento existe en department-service
    const DEPARTMENT_SERVICE_URL =
      process.env.DEPARTMENT_SERVICE_URL || 'http://localhost:3005';
    let departamento;
    try {
      const depResp = await axios.get(
        `${DEPARTMENT_SERVICE_URL}/departments/${createUserAdminDto.idDepartamento}`,
      );
      departamento = depResp.data;
      if (
        !departamento ||
        departamento.idDepartamento === undefined ||
        departamento.idDepartamento === null
      ) {
        throw new Error();
      }
    } catch (e) {
      throw new BadRequestException('Este departamento no existe');
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
      const rolePayload = {
        ...createUserAdminDto,
        idDepartamento: departamento.idDepartamento,
      };
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
        departamento: departamento.Nombre,
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

  /**
   * @swagger
   * /auth/admin/medics:
   *   get:
   *     summary: Obtener todos los médicos (solo ADMIN)
   *     description: Devuelve la lista de usuarios con rol MEDIC. Solo accesible para usuarios con rol ADMIN. El rol se valida mediante el header x-user-role reenviado por el API Gateway.
   *     responses:
   *       200:
   *         description: Lista de médicos
   *         content:
   *           application/json:
   *             example:
   *               - idUsuario: "123456789"
   *                 nombre: "Dr. House"
   *                 email: "house@mail.com"
   *               - idUsuario: "987654321"
   *                 nombre: "Dra. Grey"
   *                 email: "grey@mail.com"
   *       403:
   *         description: Solo el usuario ADMIN puede acceder
   */
  @ApiOperation({ summary: 'Obtener todos los médicos (solo ADMIN)' })
  @ApiResponse({ status: 200, description: 'Lista de médicos', schema: { example: [{ idUsuario: '123456789', nombre: 'Dr. House', email: 'house@mail.com' }] } })
  @ApiResponse({ status: 403, description: 'Solo el usuario ADMIN puede acceder' })
  @Get('admin/medics')
  async getAllMedics(@Req() req) {
    const userRole = req.headers['x-user-role'];
    if (userRole !== 'ADMIN') {
      throw new ForbiddenException('Solo el usuario ADMIN puede acceder');
    }
    // Buscar todos los usuarios con rol MEDIC
    // Suponiendo que hay una relación o campo que indica el rol, o bien filtrar por los que han sido asignados como MEDIC
    // Aquí se asume que hay un campo o relación, si no, habría que consultar el microservicio de roles
    // Por simplicidad, se filtra por email que contenga 'medic' (ajustar según tu modelo real)
    // Lo ideal sería consultar el microservicio de roles para obtener los idUsuario con rol MEDIC
    // Aquí se muestra una consulta básica:
    return this.usersService.users({
      where: {
        // Ajusta esto según tu modelo real
        // Por ejemplo, si tienes un campo 'role' o una relación
        // role: 'MEDIC'
        email: { contains: 'medic' },
      },
    });
  }

  /**
   * @swagger
   * /auth/admin/patients:
   *   get:
   *     summary: Obtener todos los pacientes (solo ADMIN)
   *     description: Devuelve la lista de usuarios con rol PATIENT. Solo accesible para usuarios con rol ADMIN. El rol se valida mediante el header x-user-role reenviado por el API Gateway.
   *     responses:
   *       200:
   *         description: Lista de pacientes
   *         content:
   *           application/json:
   *             example:
   *               - idUsuario: "1234567890"
   *                 nombre: "Juan"
   *                 email: "patient@mail.com"
   *               - idUsuario: "9876543210"
   *                 nombre: "Ana"
   *                 email: "ana.patient@mail.com"
   *       403:
   *         description: Solo el usuario ADMIN puede acceder
   */
  @ApiOperation({ summary: 'Obtener todos los pacientes (solo ADMIN)' })
  @ApiResponse({ status: 200, description: 'Lista de pacientes', schema: { example: [{ idUsuario: '1234567890', nombre: 'Juan', email: 'patient@mail.com' }] } })
  @ApiResponse({ status: 403, description: 'Solo el usuario ADMIN puede acceder' })
  @Get('admin/patients')
  async getAllPatients(@Req() req) {
    const userRole = req.headers['x-user-role'];
    if (userRole !== 'ADMIN') {
      throw new ForbiddenException('Solo el usuario ADMIN puede acceder');
    }
    // Buscar todos los usuarios con rol PATIENT
    // Por simplicidad, se filtra por email que contenga 'patient' (ajustar según tu modelo real)
    return this.usersService.users({
      where: {
        email: { contains: 'patient' },
      },
    });
  }

  /**
   * @swagger
   * /auth/admin/create-patient:
   *   post:
   *     summary: Crear paciente por ADMIN
   *     description: Permite a un usuario ADMIN crear un paciente. El idPAdministrativo y el nombre del departamento se obtienen automáticamente del token y de los microservicios. Si la especialización falla, hace rollback.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateUserAdminDto'
   *           example:
   *             email: "patient@mail.com"
   *             password: "password123"
   *             nombre: "Juan"
   *             direccion: "Calle 123"
   *             genero: "M"
   *             fechaNacimiento: "1990-01-01"
   *             idUsuario: 1234567890
   *     responses:
   *       201:
   *         description: Paciente creado y rol asignado
   *         content:
   *           application/json:
   *             example:
   *               idUsuario: "1234567890"
   *               nombre: "Juan"
   *               email: "patient@mail.com"
   *               baseDepartamento: "Cardiologia"
   *       400:
   *         description: Error de validación, especialización o permisos
   */
  @ApiOperation({ summary: 'Crear paciente por ADMIN' })
  @ApiResponse({ status: 201, description: 'Paciente creado y rol asignado' })
  @ApiBody({ type: CreateUserAdminDto })
  @Post('admin/create-patient')
  async createPatientByAdmin(
    @Body() createUserAdminDto: CreateUserAdminDto,
    @Req() req,
  ) {
    // Log para depuración
    console.log('===> Entrando a /auth/admin/create-patient');
    console.log('Headers recibidos:', req.headers);
    console.log('Body recibido:', createUserAdminDto);
    let idUsuario: string | undefined = req.user?.idUsuario || req.user?.sub;
    if (!idUsuario && req.headers['authorization']) {
      const token = req.headers['authorization'].split(' ')[1];
      try {
        const decoded = JSON.parse(
          Buffer.from(token.split('.')[1], 'base64').toString(),
        );
        console.log('Payload JWT decodificado:', decoded);
        idUsuario = decoded.sub;
      } catch (e) {
        console.log('No se pudo decodificar el JWT:', e);
      }
    }
    if (!idUsuario) {
      throw new BadRequestException('No se encontró el idUsuario en el token');
    }
    // 1. Buscar empleado por idUsuario
    let empleado = await this.usersService.getEmpleadoByIdUsuario(idUsuario);
    if (Array.isArray(empleado)) {
      empleado = empleado[0];
    }
    if (
      !empleado ||
      typeof empleado !== 'object' ||
      !('idEmpleado' in empleado) ||
      !('idDepartamento' in empleado)
    ) {
      throw new BadRequestException(
        'El admin no tiene empleado o departamento asignado',
      );
    }
    const idEmpleado = empleado.idEmpleado;
    const idDepartamento = empleado.idDepartamento;
    // Log para depuración del idEmpleado
    console.log('Buscando idPAdministrativo para idEmpleado:', idEmpleado);
    // 2. Buscar idPAdministrativo por idEmpleado
    const CARDIOLOGY_SERVICE_URL =
      process.env.CARDIOLOGY_SERVICE_URL || 'http://localhost:3003';
    let idPAdministrativo: number | undefined;
    try {
      const padmResp = await axios.get(
        `${CARDIOLOGY_SERVICE_URL}/employees/padministrativo/by-employee/${idEmpleado}`,
      );
      console.log('Respuesta de padministrativo/by-employee:', padmResp.data);
      idPAdministrativo = padmResp.data.idPAdministrativo;
    } catch (e) {
      console.error(
        'Error al obtener idPAdministrativo:',
        e?.response?.data || e,
      );
      throw new BadRequestException(
        'No se pudo obtener el idPAdministrativo del admin',
      );
    }
    if (!idPAdministrativo) {
      throw new BadRequestException(
        'El admin no tiene idPAdministrativo asignado',
      );
    }
    // 3. Consultar el nombre del departamento desde department-service
    const DEPARTMENT_SERVICE_URL =
      process.env.DEPARTMENT_SERVICE_URL || 'http://localhost:3005';
    let baseDepartamento: string;
    try {
      const depResp = await axios.get(
        `${DEPARTMENT_SERVICE_URL}/departments/${idDepartamento}`,
      );
      baseDepartamento = depResp.data.Nombre;
    } catch (e) {
      throw new BadRequestException(
        'No se pudo obtener el nombre del departamento',
      );
    }
    // Validación de especialización incompatible antes de crear el usuario
    try {
      const resp = await axios.get(
        `${CARDIOLOGY_SERVICE_URL}/employees/roles/${createUserAdminDto.idUsuario}`,
      );
      const roles = resp.data.roles as string[];
      if (roles.includes('PATIENT')) {
        throw new BadRequestException('El usuario ya es paciente.');
      }
    } catch (err) {
      throw new BadRequestException(
        'No se pudo validar la especialización en cardiology-service.',
      );
    }
    // Llama al AuthService, que maneja la transacción y rollback
    return this.authService.createPatientByAdmin({
      ...createUserAdminDto,
      idPAdministrativo,
      baseDepartamento,
    });
  }

  /**
   * @swagger
   * /auth/admin/patients/{id}:
   *   patch:
   *     summary: Modificar datos de un paciente (solo ADMIN)
   *     description: Permite a un usuario ADMIN modificar los datos de un paciente existente. El rol se valida mediante el header x-user-role reenviado por el API Gateway.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID del paciente a modificar
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           example:
   *             nombre: "Nuevo Nombre"
   *             direccion: "Nueva dirección"
   *     responses:
   *       200:
   *         description: Paciente actualizado
   *         content:
   *           application/json:
   *             example:
   *               idUsuario: "1234567890"
   *               nombre: "Nuevo Nombre"
   *               direccion: "Nueva dirección"
   *       403:
   *         description: Solo el usuario ADMIN puede acceder
   *       404:
   *         description: Paciente no encontrado
   */
  @ApiOperation({ summary: 'Modificar datos de un paciente (solo ADMIN)' })
  @ApiResponse({ status: 200, description: 'Paciente actualizado', schema: { example: { idUsuario: '1234567890', nombre: 'Nuevo Nombre', direccion: 'Nueva dirección' } } })
  @ApiResponse({ status: 403, description: 'Solo el usuario ADMIN puede acceder' })
  @ApiResponse({ status: 404, description: 'Paciente no encontrado' })
  @Patch('admin/patients/:id')
  async updatePatientByAdmin(@Req() req, @Param('id') id: string, @Body() body: any) {
    const userRole = req.headers['x-user-role'];
    if (userRole !== 'ADMIN') {
      throw new ForbiddenException('Solo el usuario ADMIN puede acceder');
    }
    // Actualizar el usuario (paciente)
    const updated = await this.usersService.updateUser({
      where: { idUsuario: BigInt(id) },
      data: body,
    });
    if (!updated) {
      throw new NotFoundException('Paciente no encontrado');
    }
    return updated;
  }

  /**
   * @swagger
   * /auth/patient/profile:
   *   patch:
   *     summary: Modificar datos personales del paciente (solo PATIENT)
   *     description: Permite a un usuario con rol PATIENT modificar únicamente sus propios datos personales. El id se obtiene del token (header x-user-id).
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           example:
   *             nombre: "Nuevo Nombre"
   *             direccion: "Nueva dirección"
   *     responses:
   *       200:
   *         description: Perfil actualizado
   *         content:
   *           application/json:
   *             example:
   *               idUsuario: "1234567890"
   *               nombre: "Nuevo Nombre"
   *               direccion: "Nueva dirección"
   *       403:
   *         description: Solo el usuario PATIENT puede acceder
   *       404:
   *         description: Paciente no encontrado
   */
  @ApiOperation({ summary: 'Modificar datos personales del paciente (solo PATIENT)' })
  @ApiResponse({ status: 200, description: 'Perfil actualizado', schema: { example: { idUsuario: '1234567890', nombre: 'Nuevo Nombre', direccion: 'Nueva dirección' } } })
  @ApiResponse({ status: 403, description: 'Solo el usuario PATIENT puede acceder' })
  @ApiResponse({ status: 404, description: 'Paciente no encontrado' })
  @Patch('patient/profile')
  async updatePatientProfile(@Req() req, @Body() body: any) {
    const userRole = req.headers['x-user-role'];
    const userId = req.headers['x-user-id'];
    if (userRole !== 'PATIENT' || !userId) {
      throw new ForbiddenException('Solo el usuario PATIENT puede acceder');
    }
    // Actualizar solo los datos personales permitidos
    const allowedFields = ['nombre', 'direccion', 'genero', 'fechaNacimiento'];
    const updateData: any = {};
    for (const key of allowedFields) {
      if (body[key] !== undefined) {
        updateData[key] = body[key];
      }
    }
    if (Object.keys(updateData).length === 0) {
      throw new ForbiddenException('No se enviaron datos válidos para actualizar');
    }
    const updated = await this.usersService.updateUser({
      where: { idUsuario: BigInt(userId) },
      data: updateData,
    });
    if (!updated) {
      throw new NotFoundException('Paciente no encontrado');
    }
    return updated;
  }
}
