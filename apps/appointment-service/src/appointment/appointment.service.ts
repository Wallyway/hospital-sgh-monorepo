/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
        // 1. Obtener médicos del departamento
        const medicsUrl = `http://localhost:3003/employees/medics?department=${specialty}`;
        console.log('[AppointmentService] Consultando médicos en:', medicsUrl);
        let medics: any[] = [];
        try {
            const medicsResp = await this.httpService.axiosRef.get(medicsUrl);
            medics = medicsResp.data;
            console.log('[AppointmentService] Médicos recibidos:', medics);
        } catch (error) {
            console.error('[AppointmentService] Error consultando médicos:', error);
            return [];
        }

        // 2. Para cada médico, consultar sus citas en la fecha dada
        const availableMedics: any[] = [];
        for (const medic of medics) {
            const citasUrl = `http://localhost:3003/employees/medics/${medic.idMedico}/appointments?date=${date}`;
            console.log(`[AppointmentService] Consultando citas para médico ${medic.idMedico} en:`, citasUrl);
            let citas: any[] = [];
            try {
                const citasResp = await this.httpService.axiosRef.get(citasUrl);
                citas = citasResp.data;
                console.log(`[AppointmentService] Citas recibidas para médico ${medic.idMedico}:`, citas);
            } catch (error) {
                console.error(`[AppointmentService] Error consultando citas para médico ${medic.idMedico}:`, error);
                continue;
            }

            // 3. Validar disponibilidad en la franja horaria
            const [hour, minute] = time.split(':').map(Number);
            const start = new Date(date);
            start.setHours(hour, minute, 0, 0);
            const end = new Date(start.getTime() + 30 * 60000); // 30 minutos después

            const overlap = citas.some(cita => {
                const citaDate = new Date(cita.fechaYHora);
                return citaDate >= start && citaDate < end;
            });
            if (!overlap) {
                console.log(`[AppointmentService] Médico ${medic.idMedico} disponible en la franja.`);
                availableMedics.push(medic);
            } else {
                console.log(`[AppointmentService] Médico ${medic.idMedico} NO disponible en la franja.`);
            }
        }
        console.log('[AppointmentService] Médicos disponibles:', availableMedics);
        return availableMedics;
    }

    async createAppointment(body: any, user: any) {
        // Lógica para agendar cita
        return { message: 'Cita agendada (mock)' };
    }
}
