/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { Usuario, Prisma } from '../../generated/prisma/index.js';
import * as bcryptjs from 'bcryptjs';
import { CreateUserAdminDto } from '../../dto/create-user-admin.dto.js';
import { CreateUserPhoneDto } from '../../dto/create-user-phone.dto.js';
import axios from 'axios';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UsuarioWhereUniqueInput,
  ): Promise<Usuario | null> {
    return await this.prisma.usuario.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UsuarioWhereUniqueInput;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput;
  }): Promise<Usuario[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.usuario.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUserByAdmin(data: CreateUserAdminDto): Promise<Usuario> {
    const saltOrRounds = 10;
    const passwordHash = await bcryptjs.hash(data.password, saltOrRounds);

    try {
      const newUser = await this.prisma.usuario.create({
        data: {
          idUsuario: BigInt(data.idUsuario),
          nombre: data.nombre,
          email: data.email,
          passwordHash,
          genero: data.genero,
          direccion: data.direccion,
          fechaNacimiento: new Date(data.fechaNacimiento),
        },
      });

      // --- SIMULATE SENDING PASSWORD ---
      console.log(
        `[USER CREATED] A new user has been created by an admin.\n
         Email: ${newUser.email}\n
         Initial Password: ${data.password}\n`,
      );
      // --- END SIMULATION ---

      return newUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('A user with this email already exists.');
        }
      }
      console.error('Error creating user by admin:', error);
      throw new InternalServerErrorException('Error creating user');
    }
  }

  async addPhoneToUser(data: CreateUserPhoneDto) {
    return await this.prisma.telUsuario.create({
      data: {
        idUsuario: BigInt(data.idUsuario),
        telefono: BigInt(data.telefono),
      },
    });
  }

  async updateUser(params: {
    where: Prisma.UsuarioWhereUniqueInput;
    data: Prisma.UsuarioUpdateInput;
  }): Promise<Usuario | null> {
    const { where, data } = params;
    const exists = await this.prisma.usuario.findUnique({ where });
    if (!exists) {
      return null;
    }
    return await this.prisma.usuario.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UsuarioWhereUniqueInput): Promise<Usuario> {
    return await this.prisma.usuario.delete({
      where,
    });
  }

  async updatePassword(
    userId: string,
    newPasswordHash: string,
  ): Promise<Usuario> {
    return this.prisma.usuario.update({
      where: { idUsuario: BigInt(userId) },
      data: { passwordHash: newPasswordHash },
    });
  }

  async getEmpleadoByIdUsuario(
    idUsuario: string | number,
  ): Promise<unknown | null> {
    const CARDIOLOGY_SERVICE_URL =
      process.env.CARDIOLOGY_SERVICE_URL || 'http://localhost:3003';
    try {
      const resp = await axios.get(
        `${CARDIOLOGY_SERVICE_URL}/employees/by-user/${idUsuario}`,
      );
      return resp.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        return null;
      }
      throw err;
    }
  }
}
