import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPhoneDto {
    @ApiProperty({ example: '123456789012345678' })
    @IsNotEmpty()
    @IsNumberString()
    idUsuario!: string;

    @ApiProperty({ example: '3001234567' })
    @IsNotEmpty()
    @IsNumberString()
    telefono!: string;
}
