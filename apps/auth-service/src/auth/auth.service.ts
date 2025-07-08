/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { Usuario } from '../../generated/prisma';
import { PrismaService } from '../prisma.service.js';
import { randomUUID } from 'crypto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}
  async validateUser(
    email: string,
    pass: string,
    role: string,
  ): Promise<Omit<Usuario, 'passwordHash'>> {
    const user = await this.usersService.user({ email });

    if (user && (await bcryptjs.compare(pass, user.passwordHash))) {
      const validRoles = ['ADMIN', 'MEDIC', 'PATIENT', 'ROOT'];
      if (!validRoles.includes(role)) {
        throw new UnauthorizedException('Invalid role');
      }
      // --- SIMULACIÓN O CONSULTA REAL ---
      const useSimulation =
        this.configService.get<string>('USE_ROLE_SIMULATION', 'true') ===
        'true';
      if (useSimulation) {
        // Simulación: siempre válido

        const { passwordHash, ...result } = user;
        return result;
      } else {
        // Consulta real al microservicio de empleados para validar el rol
        // Suponiendo que tienes un endpoint como /employees/validate-role
        //TODO:
        try {
          const EMPLOYEE_SERVICE_URL = this.configService.get<string>(
            'EMPLOYEE_SERVICE_URL',
            'http://localhost:3003',
          );
          const response = await axios.post(
            `${EMPLOYEE_SERVICE_URL}/employees/validate-role`,
            {
              idUsuario: user.idUsuario.toString(),
              role,
            },
          );
          if (response.data && response.data.valid === true) {
            const { passwordHash, ...result } = user;
            return result;
          } else {
            throw new UnauthorizedException(
              'User does not belong to the specified role',
            );
          }
        } catch (err) {
          throw new UnauthorizedException('Error validating user role');
        }
      }
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  login(user: Omit<Usuario, 'passwordHash'>, role: string) {
    const payload: { email: string; sub: string; role: string } = {
      email: user.email,
      sub: user.idUsuario.toString(),
      role,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await this.usersService.user({ email });
    if (!user) {
      return {
        message: 'If the email exists, a password reset link has been sent.',
      };
    }
    const token = randomUUID();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 30);
    await this.prisma.passwordResetToken.deleteMany({
      where: { usuarioId: user.idUsuario },
    });
    await this.prisma.passwordResetToken.create({
      data: {
        token,
        usuarioId: user.idUsuario,
        expiresAt,
      },
    });
    console.log(`Password reset token for ${email}: ${token}`);
    return {
      message: 'If the email exists, a password reset link has been sent.',
    };
  }

  async resetPassword(
    token: string,
    newPassword: string,
  ): Promise<{ message: string }> {
    const resetToken = await this.prisma.passwordResetToken.findUnique({
      where: { token },
      include: { usuario: true },
    });
    if (!resetToken) {
      throw new BadRequestException('Invalid or expired reset token');
    }
    if (resetToken.expiresAt < new Date()) {
      await this.prisma.passwordResetToken.delete({
        where: { id: resetToken.id },
      });
      throw new BadRequestException('Reset token has expired');
    }
    const saltOrRounds = 10;
    const newPasswordHash = await bcryptjs.hash(newPassword, saltOrRounds);
    await this.prisma.usuario.update({
      where: { idUsuario: resetToken.usuarioId },
      data: { passwordHash: newPasswordHash },
    });
    await this.prisma.passwordResetToken.delete({
      where: { id: resetToken.id },
    });
    return { message: 'Password has been reset successfully' };
  }

  async createPatientByAdmin(data: any) {
    // 1. Crea el usuario (reutiliza la lógica de createUserByAdmin)
    const newUser = await this.usersService.createUserByAdmin(data);

    // 2. Lógica para crear el paciente (emitir evento, llamar a microservicio, etc.)
    // Aquí puedes emitir un evento, llamar a un servicio, o hacer una petición HTTP
    // Por ejemplo, usando axios para llamar al servicio de pacientes:
    try {
      const CLINIC_SERVICE_URL = this.configService.get<string>(
        'CLINIC_SERVICE_URL',
        'http://localhost:3004',
      );
      await axios.post(`${CLINIC_SERVICE_URL}/patients`, {
        userId: newUser.idUsuario,
        idPAdministrativo: data.idPAdministrativo,
        baseDepartamento: data.baseDepartamento || 'Cardiología',
      });
    } catch (err) {
      // Rollback manual: si falla la creación del paciente, elimina el usuario creado
      await this.usersService.deleteUser({ idUsuario: newUser.idUsuario });
      throw new BadRequestException(
        'Error creando el paciente en el microservicio de clínica',
      );
    }
    return newUser;
  }
}
