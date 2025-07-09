/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  HttpException,
  HttpStatus,
  ForbiddenException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { RequestEquipmentDto } from '../dto/request-equipment.dto';
import { EquipmentResponseDto } from '../dto/equipment-response.dto';

@Injectable()
export class EquipmentService {
  private readonly cardiologyServiceUrl =
    process.env.CARDIOLOGY_SERVICE_URL || 'http://localhost:3003';

  constructor(private readonly httpService: HttpService) {}

  async getAllEquipment(userId: string): Promise<EquipmentResponseDto[]> {
    if (!userId) {
      throw new ForbiddenException(
        'No se pudo determinar el usuario autenticado',
      );
    }
    const rolesResponse = await firstValueFrom(
      this.httpService.get(
        `${this.cardiologyServiceUrl}/employees/roles/${userId}`,
      ),
    );
    const roles = rolesResponse.data?.roles || [];
    if (!roles.includes('MEDIC')) {
      throw new ForbiddenException(
        'Solo los usuarios con rol MEDIC pueden consultar el equipamiento',
      );
    }
    // Si es MEDIC, continuar
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.cardiologyServiceUrl}/equipment`),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error al obtener equipos del servicio de cardiología',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async requestEquipment(
    requestDto: RequestEquipmentDto,
    userId: string,
  ): Promise<any> {
    try {
      console.log(
        '[EquipmentService] Solicitud de equipo recibida para userId:',
        userId,
        'con body:',
        requestDto,
      );
      if (!userId) {
        throw new Error('idUsuario is required');
      }
      // Always construct the body explicitly to ensure idUsuario is present
      const bodyToSend = {
        idUsuario: userId,
        idEquipamiento: requestDto.idEquipamiento,
        FPrestamo: requestDto.FPrestamo,
        FDevolucion: requestDto.FDevolucion,
      };
      console.log(
        '[EquipmentService] Body FINAL enviado a cardiology-service:',
        bodyToSend,
      );
      const response = await firstValueFrom(
        this.httpService.post(
          `${this.cardiologyServiceUrl}/equipment/request`,
          bodyToSend,
        ),
      );
      return response.data;
    } catch (error) {
      console.error(
        '[EquipmentService] Error en requestEquipment:',
        error?.message || error,
      );
      // Propaga el mensaje real si viene de una respuesta HTTP (axios)
      if (error?.response?.data?.message) {
        throw new HttpException(
          error.response.data.message,
          error.response.status || HttpStatus.BAD_GATEWAY,
        );
      }
      // Si es un HttpException de Nest
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Error al solicitar equipo al servicio de cardiología',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async seedDefaultEquipment(): Promise<any> {
    type SeedResult =
      | { nombre: string; status: 'ok'; data: any }
      | { nombre: string; status: 'error'; error: any };
    const defaultEquipment = [
      { idDepartamento: 1, nombre: 'Electrocardiógrafo', estado: 'D' },
      { idDepartamento: 1, nombre: 'Desfibrilador', estado: 'D' },
      { idDepartamento: 1, nombre: 'Monitor de signos vitales', estado: 'D' },
      { idDepartamento: 1, nombre: 'Bomba de infusión', estado: 'D' },
      { idDepartamento: 1, nombre: 'ECG portátil', estado: 'D' },
    ];
    const results: SeedResult[] = [];
    for (const equipo of defaultEquipment) {
      try {
        const response = await firstValueFrom(
          this.httpService.post(
            `${this.cardiologyServiceUrl}/equipment/internal/create`,
            equipo,
          ),
        );
        results.push({
          nombre: equipo.nombre,
          status: 'ok',
          data: response.data,
        });
      } catch (error) {
        results.push({
          nombre: equipo.nombre,
          status: 'error',
          error: error.message,
        });
      }
    }
    return results;
  }
}
