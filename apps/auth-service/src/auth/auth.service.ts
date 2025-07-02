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
import { User } from '../../generated/prisma';
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
  ) { }
  async validateUser(
    email: string,
    pass: string,
    role: string,
  ): Promise<Omit<User, 'passwordHash'>> {
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
              idUser: user.idUser,
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

  login(user: Omit<User, 'passwordHash'>, role: string) {
    const payload: { email: string; sub: number; role: string } = {
      email: user.email,
      sub: user.idUser,
      role,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    // Verificar que el usuario existe
    const user = await this.usersService.user({ email });
    if (!user) {
      // Por seguridad, no revelamos si el email existe o no
      return {
        message: 'If the email exists, a password reset link has been sent.',
      };
    }

    // Generar token único
    const token = randomUUID();

    // Calcular fecha de expiración (30 minutos)
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 30);

    // Eliminar tokens anteriores del usuario (si existen)

    await this.prisma.passwordResetToken.deleteMany({
      where: { userId: user.idUser },
    });

    // Guardar el nuevo token

    await this.prisma.passwordResetToken.create({
      data: {
        token,

        userId: user.idUser,
        expiresAt,
      },
    });

    // TODO: Enviar email con el token
    // Por ahora, solo retornamos un mensaje de éxito
    console.log(`Password reset token for ${email}: ${token}`);

    return {
      message: 'If the email exists, a password reset link has been sent.',
    };
  }

  async resetPassword(
    token: string,
    newPassword: string,
  ): Promise<{ message: string }> {
    // Buscar el token en la base de datos

    const resetToken = await this.prisma.passwordResetToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!resetToken) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    // Verificar que no ha expirado
    if (resetToken.expiresAt < new Date()) {
      // Eliminar token expirado

      await this.prisma.passwordResetToken.delete({
        where: { id: resetToken.id },
      });
      throw new BadRequestException('Reset token has expired');
    }

    // Hashear la nueva contraseña
    const saltOrRounds = 10;
    const newPasswordHash = await bcryptjs.hash(newPassword, saltOrRounds);

    // Actualizar la contraseña del usuario
    await this.prisma.user.update({
      where: { idUser: resetToken.userId },
      data: { passwordHash: newPasswordHash },
    });

    // Eliminar el token usado

    await this.prisma.passwordResetToken.delete({
      where: { id: resetToken.id },
    });

    return { message: 'Password has been reset successfully' };
  }
}
