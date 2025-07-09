import { IsInt, IsDateString } from 'class-validator';

export class RequestEquipmentDto {
  @IsInt()
  idMedico: number;

  @IsInt()
  idEquipamiento: number;

  @IsDateString()
  FPrestamo: string;

  @IsDateString()
  FDevolucion: string;
}
