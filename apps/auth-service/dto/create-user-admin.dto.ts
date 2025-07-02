import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserAdminDto {
  @ApiProperty({ example: 'user@mail.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password!: string;

  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'Calle 123' })
  @IsString()
  @IsNotEmpty()
  address!: string;

  @ApiProperty({ example: 'M' })
  @IsString()
  @IsNotEmpty()
  gender!: string;

  @ApiProperty({ example: '1990-01-01' })
  @IsString()
  @IsNotEmpty()
  birthDate!: string;

  @ApiProperty({ example: 123456789 })
  @IsNotEmpty()
  idUser!: number;
}
