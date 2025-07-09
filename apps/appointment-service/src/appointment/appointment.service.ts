import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppointmentService {
    constructor(private readonly httpService: HttpService) { }

    async getSpecialties() {
        const url = 'http://localhost:3005/departments';
        console.log('[AppointmentService] Consultando departamentos en:', url);
        try {
            const response = await this.httpService.axiosRef.get(url);
            console.log('[AppointmentService] Respuesta departamentos:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] Error consultando departamentos:', error);
            return [];
        }
    }

    async getAvailableMedics(specialty: string, date: string, time: string) {
        // Lógica para obtener médicos disponibles
        return [];
    }

    async createAppointment(body: any, user: any) {
        // Lógica para agendar cita
        return { message: 'Cita agendada (mock)' };
    }
} 