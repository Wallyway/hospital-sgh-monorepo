import {
  Controller,
  Post,
  Body,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from '../../dto/login.dto.js';
import { ForgotPasswordDto } from '../../dto/forgot-password.dto.js';
import { ResetPasswordDto } from '../../dto/reset-password.dto.js';
import { RolesGuard } from './guards/roles.guard.js';
import { Roles } from './decorators/roles.decorator.js';
import { UserRole } from 'common-types';
import { CreateUserAdminDto } from '../../dto/create-user-admin.dto.js';
import { UsersService } from '../users/users.service.js';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) { }

  @Post('dev/bootstrap-admin')
  async bootstrapAdmin(@Body() dto: CreateUserAdminDto) {
    // Verifica si ya existe un admin
    const existingAdmins = await this.usersService.findUsersByRole(
      UserRole.ADMIN,
    );
    if (existingAdmins.length > 0) {
      throw new BadRequestException('Ya existe al menos un usuario admin');
    }
    // Crea el admin
    return this.usersService.createUserByAdmin({
      ...dto,
      roles: UserRole.ADMIN,
    });
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    return this.authService.login(user);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.newPassword,
    );
  }

  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @Post('admin/create-user')
  async createUserByAdmin(@Body() createUserAdminDto: CreateUserAdminDto) {
    return this.usersService.createUserByAdmin(createUserAdminDto);
  }
}
