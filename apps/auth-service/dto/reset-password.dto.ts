import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
    @ApiProperty({ example: 'reset-token-uuid' })
    token!: string;

    @ApiProperty({ example: 'newPassword123' })
    newPassword!: string;
}
