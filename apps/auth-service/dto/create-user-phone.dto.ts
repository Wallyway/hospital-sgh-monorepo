import { IsNotEmpty, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPhoneDto {
    @ApiProperty({ example: 123456789 })
    @IsNotEmpty()
    idUser!: number;

    @ApiProperty({ example: '3001234567' })
    @IsNotEmpty()
    @IsNumberString()
    telephone!: string;
}
