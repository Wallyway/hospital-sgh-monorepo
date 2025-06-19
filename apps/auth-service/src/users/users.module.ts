import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { PrismaService } from '../prisma.service.js';

@Module({
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
