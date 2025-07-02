import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { User, Prisma } from '../../generated/prisma/index.js';
import * as bcryptjs from 'bcryptjs';
import { CreateUserAdminDto } from '../../dto/create-user-admin.dto.js';
import { CreateUserPhoneDto } from '../../dto/create-user-phone.dto.js';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUserByAdmin(data: CreateUserAdminDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHash = await bcryptjs.hash(data.password, saltOrRounds);

    try {
      const newUser = await this.prisma.user.create({
        data: {
          idUser: data.idUser,
          name: data.name,
          email: data.email,
          address: data.address,
          passwordHash,
          gender: data.gender,
          birthDate: new Date(data.birthDate),
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await this.prisma.telUser.create({
      data: {
        idUser: data.idUser,
        telephone: BigInt(data.telephone),
      },
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return await this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.prisma.user.delete({
      where,
    });
  }

  // Nuevo método para actualizar la contraseña de un usuario
  async updatePassword(userId: number, newPasswordHash: string): Promise<User> {
    return this.prisma.user.update({
      where: { idUser: userId },
      data: { passwordHash: newPasswordHash },
    });
  }
}
