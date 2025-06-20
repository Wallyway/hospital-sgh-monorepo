import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { User, Prisma } from '../../generated/prisma/index.js';
import * as bcryptjs from 'bcryptjs';
import { CreateUserAdminDto } from '../../dto/create-user-admin.dto.js';
import { UserRole } from 'common-types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findUsersByRole(role: UserRole): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { roles: role },
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
          name: data.name,
          email: data.email,
          address: data.address,
          passwordHash,
          roles: data.roles,
        },
      });

      // --- SIMULATE SENDING PASSWORD ---
      console.log(
        `[USER CREATED] A new user has been created by an admin.
         Email: ${newUser.email}
         Initial Password: ${data.password}
         Please communicate this password securely to the user.`,
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
}
