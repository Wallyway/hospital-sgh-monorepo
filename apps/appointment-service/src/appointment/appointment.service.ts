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
        console.log('[AppointmentService] [getSpecialties] Consultando departamentos en:', url);
        try {
            const response = await this.httpService.axiosRef.get(url);
            console.log('[AppointmentService] [getSpecialties] Respuesta:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [getSpecialties] Error:', error.message, error);
            return [];
        }
    }

    async getMedicById(idMedico: number) {
        const url = `http://localhost:3003/employees/medics/${idMedico}`;
        console.log('[AppointmentService] [getMedicById] Consultando médico en:', url);
        try {
            const response = await this.httpService.axiosRef.get(url);
            console.log('[AppointmentService] [getMedicById] Respuesta:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [getMedicById] Error:', error.message, error);
            return null;
        }
    }

    async getAvailableMedics(specialty: string, date: string, time: string) {
        const medicsUrl = `http://localhost:3003/employees/medics?department=${specialty}`;
        console.log('[AppointmentService] [getAvailableMedics] Consultando médicos en:', medicsUrl);
        let medics: any[] = [];
        try {
            const medicsResp = await this.httpService.axiosRef.get(medicsUrl);
            medics = medicsResp.data;
            console.log('[AppointmentService] [getAvailableMedics] Médicos recibidos:', medics);
        } catch (error) {
            console.error('[AppointmentService] [getAvailableMedics] Error consultando médicos:', error.message, error);
            return [];
        }

        const availableMedics: any[] = [];
        for (const medic of medics) {
            const citasUrl = `http://localhost:3003/employees/medics/${medic.idMedico}/appointments?date=${date}`;
            console.log(`[AppointmentService] [getAvailableMedics] Consultando citas para médico ${medic.idMedico} en:`, citasUrl);
            let citas: any[] = [];
            try {
                const citasResp = await this.httpService.axiosRef.get(citasUrl);
                citas = citasResp.data;
                console.log(`[AppointmentService] [getAvailableMedics] Citas recibidas para médico ${medic.idMedico}:`, citas);
            } catch (error) {
                console.error(`[AppointmentService] [getAvailableMedics] Error consultando citas para médico ${medic.idMedico}:`, error.message, error);
                continue;
            }

            const [hour, minute] = time.split(':').map(Number);
            const start = new Date(date);
            start.setHours(hour, minute, 0, 0);
            const end = new Date(start.getTime() + 30 * 60000);

            const overlap = citas.some((cita) => {
                const citaDate = new Date(cita.fechaYHora);
                return citaDate >= start && citaDate < end;
            });
            if (!overlap) {
                console.log(`[AppointmentService] [getAvailableMedics] Médico ${medic.idMedico} disponible en la franja.`);
                availableMedics.push(medic);
            } else {
                console.log(`[AppointmentService] [getAvailableMedics] Médico ${medic.idMedico} NO disponible en la franja.`);
            }
        }
        console.log('[AppointmentService] [getAvailableMedics] Médicos disponibles:', availableMedics);
        return availableMedics;
    }

    async createAppointment(body: any, user: any) {
        console.log('[AppointmentService] [createAppointment] Iniciando con body:', body, 'user:', user);
        const { idMedico, fechaYHora } = body;
        if (!idMedico || !fechaYHora) {
            console.error('[AppointmentService] [createAppointment] Faltan datos requeridos: idMedico o fechaYHora');
            throw new Error('idMedico y fechaYHora son requeridos');
        }
        const idPaciente = user?.idPaciente || user?.userId || user?.sub;
        console.log('[AppointmentService] [createAppointment] idPaciente determinado:', idPaciente);
        if (!idPaciente) {
            console.error('[AppointmentService] [createAppointment] No se pudo determinar el idPaciente del usuario autenticado');
            throw new Error('No se pudo determinar el idPaciente del usuario autenticado');
        }
        const [date, time] = fechaYHora.split('T');
        // 1. Consultar el médico para obtener su departamento
        const medic = await this.getMedicById(idMedico);
        if (!medic || !medic.idDepartamento) {
            console.error('[AppointmentService] [createAppointment] No se encontró el médico o su departamento');
            throw new Error('No se encontró el médico o su departamento');
        }
        const idDepartamento = medic.idDepartamento;
        console.log('[AppointmentService] [createAppointment] idDepartamento del médico:', idDepartamento);
        // 2. Consultar médicos disponibles en ese departamento y franja
        let availableMedics: any[] = [];
        try {
            availableMedics = await this.getAvailableMedics(idDepartamento, date, time.slice(0, 5));
            console.log('[AppointmentService] [createAppointment] Médicos disponibles para la franja:', availableMedics);
        } catch (error) {
            console.error('[AppointmentService] [createAppointment] Error al consultar disponibilidad:', error.message, error);
            throw new Error('Error al consultar disponibilidad: ' + error.message);
        }
        // 3. Filtrar por el idMedico solicitado
        const isAvailable = availableMedics.some((medic: any) => String(medic.idMedico) === String(idMedico));
        console.log('[AppointmentService] [createAppointment] isAvailable:', isAvailable);
        if (!isAvailable) {
            console.error('[AppointmentService] [createAppointment] El médico no está disponible en la franja seleccionada');
            throw new Error('El médico no está disponible en la franja seleccionada');
        }
        const citaPayload = {
            idPaciente,
            idMedico,
            fechaYHora,
            estado: 'R',
            resumen: '',
        };
        const url = 'http://localhost:3003/employees/citas';
        console.log('[AppointmentService] [createAppointment] Enviando POST a:', url, 'con payload:', citaPayload);
        try {
            const response = await this.httpService.axiosRef.post(url, citaPayload);
            console.log('[AppointmentService] [createAppointment] Respuesta de cardiology-service:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [createAppointment] Error creando cita en cardiology-service:', error.message, error);
            throw new Error('No se pudo crear la cita: ' + (error?.response?.data?.message || error.message));
        }
    }

    async getAppointments(user: any) {
        console.log('[AppointmentService] [getAppointments] Iniciando con user:', user);

        const idPaciente = user?.idPaciente || user?.userId || user?.sub;
        console.log('[AppointmentService] [getAppointments] idPaciente determinado:', idPaciente);

        if (!idPaciente) {
            console.error('[AppointmentService] [getAppointments] No se pudo determinar el idPaciente del usuario autenticado');
            throw new Error('No se pudo determinar el idPaciente del usuario autenticado');
        }

        // Consultar citas del paciente desde cardiology-service
        const url = `http://localhost:3003/employees/citas?patient=${idPaciente}`;
        console.log('[AppointmentService] [getAppointments] Consultando citas en:', url);

        try {
            const response = await this.httpService.axiosRef.get(url);
            console.log('[AppointmentService] [getAppointments] Respuesta de cardiology-service:', response.data);

            // Enriquecer las citas con información del médico
            const citas = response.data;
            const citasEnriquecidas = await Promise.all(
                citas.map(async (cita: any) => {
                    try {
                        const medico = await this.getMedicById(cita.idMedico);
                        return {
                            ...cita,
                            medico: medico ? {
                                idMedico: medico.idMedico,
                                nombre: medico.nombre,
                                apellido: medico.apellido,
                                especialidad: medico.especialidad
                            } : null
                        };
                    } catch (error) {
                        console.error(`[AppointmentService] [getAppointments] Error obteniendo médico ${cita.idMedico}:`, error);
                        return {
                            ...cita,
                            medico: null
                        };
                    }
                })
            );

            console.log('[AppointmentService] [getAppointments] Citas enriquecidas:', citasEnriquecidas);
            return citasEnriquecidas;
        } catch (error) {
            console.error('[AppointmentService] [getAppointments] Error consultando citas:', error.message, error);
            throw new Error('No se pudieron obtener las citas: ' + (error?.response?.data?.message || error.message));
        }
    }

    async cancelAppointment(idCita: number, user: any) {
        console.log('[AppointmentService] [cancelAppointment] Iniciando con idCita:', idCita, 'user:', user);

        const idPaciente = user?.idPaciente || user?.userId || user?.sub;
        console.log('[AppointmentService] [cancelAppointment] idPaciente determinado:', idPaciente);

        if (!idPaciente) {
            console.error('[AppointmentService] [cancelAppointment] No se pudo determinar el idPaciente del usuario autenticado');
            throw new Error('No se pudo determinar el idPaciente del usuario autenticado');
        }

        // 1. Verificar que la cita existe y pertenece al paciente
        const citaUrl = `http://localhost:3003/employees/citas/${idCita}`;
        console.log('[AppointmentService] [cancelAppointment] Consultando cita en:', citaUrl);

        let cita;
        try {
            const response = await this.httpService.axiosRef.get(citaUrl);
            cita = response.data;
            console.log('[AppointmentService] [cancelAppointment] Cita encontrada:', cita);
        } catch (error) {
            console.error('[AppointmentService] [cancelAppointment] Error consultando cita:', error.message, error);
            throw new Error('No se encontró la cita especificada');
        }

        // 2. Verificar que la cita pertenece al paciente autenticado
        if (cita.idPaciente !== Number(idPaciente)) {
            console.error('[AppointmentService] [cancelAppointment] La cita no pertenece al paciente autenticado');
            throw new Error('No tienes permisos para cancelar esta cita');
        }

        // 3. Verificar que la cita está en estado 'R' (Reservada)
        if (cita.estado !== 'R') {
            console.error('[AppointmentService] [cancelAppointment] La cita no está en estado reservada:', cita.estado);
            throw new Error('Solo se pueden cancelar citas en estado reservada');
        }

        // 4. Cancelar la cita (cambiar estado a 'C')
        const cancelUrl = `http://localhost:3003/employees/citas/${idCita}`;
        const cancelPayload = { estado: 'C' };
        console.log('[AppointmentService] [cancelAppointment] Cancelando cita en:', cancelUrl, 'con payload:', cancelPayload);

        try {
            const response = await this.httpService.axiosRef.patch(cancelUrl, cancelPayload);
            console.log('[AppointmentService] [cancelAppointment] Cita cancelada exitosamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [cancelAppointment] Error cancelando cita:', error.message, error);
            throw new Error('No se pudo cancelar la cita: ' + (error?.response?.data?.message || error.message));
        }
    }
}
