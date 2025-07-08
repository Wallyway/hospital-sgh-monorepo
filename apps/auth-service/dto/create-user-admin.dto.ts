import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsNumberString,
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
  nombre!: string;

  @ApiProperty({ example: 'Calle 123' })
  @IsString()
  @IsNotEmpty()
  direccion!: string;

  @ApiProperty({ example: 'M' })
  @IsString()
  @IsNotEmpty()
  genero!: string;

  @ApiProperty({ example: '1990-01-01' })
  @IsString()
  @IsNotEmpty()
  fechaNacimiento!: string;

  @ApiProperty({ example: '123456789012345678' })
  @IsNotEmpty()
  @IsNumberString()
  idUsuario!: string;

  @ApiProperty({ example: '5', required: false })
  idPAdministrativo?: string;

  @ApiProperty({ example: '1', required: false })
  idDepartamento?: string;
}
