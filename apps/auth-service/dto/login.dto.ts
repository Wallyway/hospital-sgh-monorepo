import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'user@mail.com' })
    @IsNotEmpty()
    @IsString()
    email!: string;

    @ApiProperty({ example: 'password123' })
    @IsNotEmpty()
    @IsString()
    password!: string;
}
