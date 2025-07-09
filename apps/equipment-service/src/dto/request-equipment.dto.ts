import { IsInt, IsDateString, IsOptional } from 'class-validator';

export class RequestEquipmentDto {
  @IsInt()
  idEquipamiento: number;

  @IsDateString()
  FPrestamo: string;

  @IsDateString()
  FDevolucion: string;

  @IsOptional()
  idUsuario?: string;
}
