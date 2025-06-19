import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users/users.service.js';
import { User as UserModel } from '../generated/prisma/index.js';
import { CreateUserDto } from './users/dto/create-user.dto.js';

@Controller()
export class AppController {
  constructor(private readonly userService: UsersService) {}

  @Post('sign-up')
  @UsePipes(new ValidationPipe())
  async signupUser(@Body() userData: CreateUserDto): Promise<UserModel> {
    try {
      return await this.userService.createUser(userData);
    } catch {
      throw new HttpException(
        'Error creating user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    try {
      return await this.userService.users({});
    } catch {
      throw new HttpException(
        'Error retrieving users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
