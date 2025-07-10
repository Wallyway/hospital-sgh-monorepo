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
        // Obtener el idUsuario del token
        const idUsuario = user?.idPaciente || user?.userId || user?.sub;
        console.log('[AppointmentService] [createAppointment] idUsuario determinado:', idUsuario);
        if (!idUsuario) {
            console.error('[AppointmentService] [createAppointment] No se pudo determinar el idUsuario del usuario autenticado');
            throw new Error('No se pudo determinar el idUsuario del usuario autenticado');
        }

        // Consultar el paciente real desde clinic-record-service
        const pacienteUrl = `http://localhost:3004/patients/by-user/${idUsuario}`;
        console.log('[AppointmentService] [createAppointment] Consultando paciente en:', pacienteUrl);

        let paciente;
        try {
            const pacienteResponse = await this.httpService.axiosRef.get(pacienteUrl);
            paciente = pacienteResponse.data;
            console.log('[AppointmentService] [createAppointment] Paciente encontrado:', paciente);
        } catch (error) {
            console.error('[AppointmentService] [createAppointment] Error consultando paciente:', error.message, error);
            throw new Error('No se encontró el paciente autenticado');
        }

        const idPaciente = paciente.idPaciente;
        console.log('[AppointmentService] [createAppointment] idPaciente real determinado:', idPaciente);
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

        // Obtener el idUsuario del token
        const idUsuario = user?.idPaciente || user?.userId || user?.sub;
        console.log('[AppointmentService] [getAppointments] idUsuario determinado:', idUsuario);

        if (!idUsuario) {
            console.error('[AppointmentService] [getAppointments] No se pudo determinar el idUsuario del usuario autenticado');
            throw new Error('No se pudo determinar el idUsuario del usuario autenticado');
        }

        // Consultar el paciente real desde clinic-record-service
        const pacienteUrl = `http://localhost:3004/patients/by-user/${idUsuario}`;
        console.log('[AppointmentService] [getAppointments] Consultando paciente en:', pacienteUrl);

        let paciente;
        try {
            const pacienteResponse = await this.httpService.axiosRef.get(pacienteUrl);
            paciente = pacienteResponse.data;
            console.log('[AppointmentService] [getAppointments] Paciente encontrado:', paciente);
        } catch (error) {
            console.error('[AppointmentService] [getAppointments] Error consultando paciente:', error.message, error);
            throw new Error('No se encontró el paciente autenticado');
        }

        const idPaciente = paciente.idPaciente;
        console.log('[AppointmentService] [getAppointments] idPaciente real determinado:', idPaciente);

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

        // Obtener el idUsuario del token
        const idUsuario = user?.idPaciente || user?.userId || user?.sub;
        console.log('[AppointmentService] [cancelAppointment] idUsuario determinado:', idUsuario);

        if (!idUsuario) {
            console.error('[AppointmentService] [cancelAppointment] No se pudo determinar el idUsuario del usuario autenticado');
            throw new Error('No se pudo determinar el idUsuario del usuario autenticado');
        }

        // Consultar el paciente real desde clinic-record-service
        const pacienteUrl = `http://localhost:3004/patients/by-user/${idUsuario}`;
        console.log('[AppointmentService] [cancelAppointment] Consultando paciente en:', pacienteUrl);

        let paciente;
        try {
            const pacienteResponse = await this.httpService.axiosRef.get(pacienteUrl);
            paciente = pacienteResponse.data;
            console.log('[AppointmentService] [cancelAppointment] Paciente encontrado:', paciente);
        } catch (error) {
            console.error('[AppointmentService] [cancelAppointment] Error consultando paciente:', error.message, error);
            throw new Error('No se encontró el paciente autenticado');
        }

        const idPaciente = paciente.idPaciente;
        console.log('[AppointmentService] [cancelAppointment] idPaciente real determinado:', idPaciente);

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

    async getMedicAppointments(user: any) {
        console.log('[AppointmentService] [getMedicAppointments] Iniciando con user:', user);

        // Verificar que el usuario es un médico y tiene permisos
        if (user?.role !== 'MEDIC') {
            console.error('[AppointmentService] [getMedicAppointments] Usuario no es médico:', user?.role);
            throw new Error('Solo los médicos pueden consultar sus citas');
        }

        // Obtener el idUsuario del token
        const idUsuario = user?.idPaciente || user?.userId || user?.sub;
        if (!idUsuario) {
            console.error('[AppointmentService] [getMedicAppointments] No se pudo determinar el idUsuario');
            throw new Error('No se pudo determinar el usuario autenticado');
        }

        // Consultar el médico por idUsuario para obtener su idEmpleado
        const medicUrl = `http://localhost:3003/employees/by-user/${idUsuario}`;
        console.log('[AppointmentService] [getMedicAppointments] Consultando médico en:', medicUrl);

        let medic;
        try {
            const response = await this.httpService.axiosRef.get(medicUrl);
            medic = response.data;
            console.log('[AppointmentService] [getMedicAppointments] Médico encontrado:', medic);
        } catch (error) {
            console.error('[AppointmentService] [getMedicAppointments] Error consultando médico:', error.message, error);
            throw new Error('No se encontró el médico autenticado');
        }

        // Obtener el idMedico del empleado
        // Necesitamos buscar el médico que corresponda a este empleado
        const medicosUrl = `http://localhost:3003/employees/medics?department=${medic.idDepartamento}`;
        console.log('[AppointmentService] [getMedicAppointments] Consultando médicos del departamento en:', medicosUrl);

        let medicos;
        try {
            const medicosResponse = await this.httpService.axiosRef.get(medicosUrl);
            medicos = medicosResponse.data;
            console.log('[AppointmentService] [getMedicAppointments] Médicos del departamento:', medicos);
        } catch (error) {
            console.error('[AppointmentService] [getMedicAppointments] Error consultando médicos del departamento:', error.message, error);
            throw new Error('No se pudieron obtener los médicos del departamento');
        }

        // Encontrar el médico que corresponda al empleado autenticado
        const medicoAutenticado = medicos.find((m: any) => m.idEmpleado === medic.idEmpleado);
        if (!medicoAutenticado) {
            console.error('[AppointmentService] [getMedicAppointments] No se encontró el médico autenticado en el departamento');
            throw new Error('No se encontró el médico autenticado en el departamento');
        }

        const idMedico = medicoAutenticado.idMedico;
        console.log('[AppointmentService] [getMedicAppointments] idMedico determinado:', idMedico);

        // Consultar citas del médico desde cardiology-service
        const citasUrl = `http://localhost:3003/employees/medics/${idMedico}/appointments`;
        console.log('[AppointmentService] [getMedicAppointments] Consultando citas en:', citasUrl);

        try {
            const response = await this.httpService.axiosRef.get(citasUrl);
            const citas = response.data;
            console.log('[AppointmentService] [getMedicAppointments] Citas encontradas:', citas);

            // Enriquecer las citas con información del paciente
            const citasEnriquecidas = await Promise.all(
                citas.map(async (cita: any) => {
                    try {
                        // Consultar información del paciente desde clinic-record-service
                        // Necesitamos obtener el paciente por su idPaciente
                        const pacienteUrl = `http://localhost:3004/patients/by-id/${cita.idPaciente}`;
                        const pacienteResponse = await this.httpService.axiosRef.get(pacienteUrl);
                        const paciente = pacienteResponse.data;

                        return {
                            ...cita,
                            paciente: paciente ? {
                                idPaciente: paciente.idPaciente,
                                nombre: paciente.nombre,
                                apellido: paciente.apellido,
                                fechaNacimiento: paciente.fechaNacimiento
                            } : null
                        };
                    } catch (error) {
                        console.error(`[AppointmentService] [getMedicAppointments] Error obteniendo paciente ${cita.idPaciente}:`, error);
                        return {
                            ...cita,
                            paciente: null
                        };
                    }
                })
            );

            console.log('[AppointmentService] [getMedicAppointments] Citas enriquecidas:', citasEnriquecidas);
            return citasEnriquecidas;
        } catch (error) {
            console.error('[AppointmentService] [getMedicAppointments] Error consultando citas:', error.message, error);
            throw new Error('No se pudieron obtener las citas: ' + (error?.response?.data?.message || error.message));
        }
    }

    // ===== MÉTODOS PARA MÉDICOS =====

    async getDiagnoses() {
        console.log('[AppointmentService] [getDiagnoses] Consultando diagnósticos');
        const url = 'http://localhost:3003/employees/diagnoses';
        try {
            const response = await this.httpService.axiosRef.get(url);
            console.log('[AppointmentService] [getDiagnoses] Diagnósticos obtenidos:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [getDiagnoses] Error:', error.message, error);
            throw new Error('No se pudieron obtener los diagnósticos: ' + (error?.response?.data?.message || error.message));
        }
    }

    async addDiagnoses(idCita: number, diagnosticos: number[], user: any) {
        console.log('[AppointmentService] [addDiagnoses] Agregando diagnósticos a cita:', idCita, 'diagnósticos:', diagnosticos);

        // Verificar que el usuario es un médico
        if (user?.role !== 'MEDIC') {
            throw new Error('Solo los médicos pueden agregar diagnósticos');
        }

        // Verificar que la cita existe y pertenece al médico
        const cita = await this.verifyMedicAppointment(idCita, user);

        // Verificar que estamos en la franja horaria de la cita
        // NOTA: Para deshabilitar esta validación durante pruebas, comenta la siguiente línea:
        this.verifyAppointmentTimeWindow(cita.fechaYHora);

        const url = `http://localhost:3003/employees/appointments/${idCita}/diagnoses`;
        const payload = { diagnosticos };

        try {
            const response = await this.httpService.axiosRef.post(url, payload);
            console.log('[AppointmentService] [addDiagnoses] Diagnósticos agregados exitosamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [addDiagnoses] Error:', error.message, error);
            throw new Error('No se pudieron agregar los diagnósticos: ' + (error?.response?.data?.message || error.message));
        }
    }

    async getMedications() {
        console.log('[AppointmentService] [getMedications] Consultando medicamentos desde farmacy-service');
        const url = 'http://localhost:3007/medications'; // farmacy-service
        try {
            const response = await this.httpService.axiosRef.get(url);
            console.log('[AppointmentService] [getMedications] Medicamentos obtenidos:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [getMedications] Error:', error.message, error);
            throw new Error('No se pudieron obtener los medicamentos: ' + (error?.response?.data?.message || error.message));
        }
    }

    async addPrescriptions(
        idCita: number,
        prescripciones: Array<{ idMedicamento: number; posologia: string; esParticular: boolean }>,
        user: any
    ) {
        console.log('[AppointmentService] [addPrescriptions] Agregando prescripciones a cita:', idCita, 'prescripciones:', prescripciones);

        // Verificar que el usuario es un médico
        if (user?.role !== 'MEDIC') {
            throw new Error('Solo los médicos pueden agregar prescripciones');
        }

        // Verificar que la cita existe y pertenece al médico
        const cita = await this.verifyMedicAppointment(idCita, user);

        // Verificar que estamos en la franja horaria de la cita
        // NOTA: Para deshabilitar esta validación durante pruebas, comenta la siguiente línea:
        this.verifyAppointmentTimeWindow(cita.fechaYHora);

        const url = `http://localhost:3003/employees/appointments/${idCita}/prescriptions`;
        const payload = { prescripciones };

        try {
            const response = await this.httpService.axiosRef.post(url, payload);
            console.log('[AppointmentService] [addPrescriptions] Prescripciones agregadas exitosamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [addPrescriptions] Error:', error.message, error);
            throw new Error('No se pudieron agregar las prescripciones: ' + (error?.response?.data?.message || error.message));
        }
    }

    async finishAppointment(idCita: number, resumen: string, user: any) {
        console.log('[AppointmentService] [finishAppointment] Finalizando cita:', idCita, 'resumen:', resumen);

        // Verificar que el usuario es un médico
        if (user?.role !== 'MEDIC') {
            throw new Error('Solo los médicos pueden finalizar citas');
        }

        // Verificar que la cita existe y pertenece al médico
        const cita = await this.verifyMedicAppointment(idCita, user);

        // Verificar que estamos en la franja horaria de la cita
        // NOTA: Para deshabilitar esta validación durante pruebas, comenta la siguiente línea:
        this.verifyAppointmentTimeWindow(cita.fechaYHora);

        // Verificar que la cita está en estado 'R' (Reservada)
        if (cita.estado !== 'R') {
            throw new Error('Solo se pueden finalizar citas en estado reservada');
        }

        const url = `http://localhost:3003/employees/appointments/${idCita}/finish`;
        const payload = { resumen };

        try {
            const response = await this.httpService.axiosRef.post(url, payload);
            console.log('[AppointmentService] [finishAppointment] Cita finalizada exitosamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [finishAppointment] Error:', error.message, error);
            throw new Error('No se pudo finalizar la cita: ' + (error?.response?.data?.message || error.message));
        }
    }

    // ===== MÉTODOS PARA ADMINISTRADORES =====

    async updateAppointment(idCita: number, updates: { idMedico?: number; fechaYHora?: string; estado?: string }, user: any) {
        console.log('[AppointmentService] [updateAppointment] Actualizando cita:', idCita, 'updates:', updates);

        // Verificar que el usuario es un administrador
        if (user?.role !== 'ADMIN') {
            throw new Error('Solo los administradores pueden actualizar citas');
        }

        // Validar la fecha y hora si se está actualizando
        if (updates.fechaYHora) {
            this.validateTimeSlot(updates.fechaYHora);
        }

        // Validar el estado si se está actualizando
        if (updates.estado && !['R', 'A', 'P', 'C'].includes(updates.estado)) {
            throw new Error('Estado de cita inválido. Debe ser R, A, P o C');
        }

        const url = `http://localhost:3003/employees/appointments/${idCita}`;

        try {
            const response = await this.httpService.axiosRef.patch(url, updates);
            console.log('[AppointmentService] [updateAppointment] Cita actualizada exitosamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('[AppointmentService] [updateAppointment] Error:', error.message, error);
            throw new Error('No se pudo actualizar la cita: ' + (error?.response?.data?.message || error.message));
        }
    }

    // ===== MÉTODOS AUXILIARES =====

    private async verifyMedicAppointment(idCita: number, user: any) {
        // Obtener el idUsuario del token
        const idUsuario = user?.idPaciente || user?.userId || user?.sub;
        if (!idUsuario) {
            throw new Error('No se pudo determinar el usuario autenticado');
        }

        // Consultar el médico por idUsuario para obtener su idEmpleado
        const medicUrl = `http://localhost:3003/employees/by-user/${idUsuario}`;
        let medic;
        try {
            const response = await this.httpService.axiosRef.get(medicUrl);
            medic = response.data;
        } catch (error) {
            throw new Error('No se encontró el médico autenticado');
        }

        // Obtener el idMedico del empleado
        const medicosUrl = `http://localhost:3003/employees/medics?department=${medic.idDepartamento}`;
        let medicos;
        try {
            const medicosResponse = await this.httpService.axiosRef.get(medicosUrl);
            medicos = medicosResponse.data;
        } catch (error) {
            throw new Error('No se pudieron obtener los médicos del departamento');
        }

        // Encontrar el médico que corresponda al empleado autenticado
        const medicoAutenticado = medicos.find((m: any) => m.idEmpleado === medic.idEmpleado);
        if (!medicoAutenticado) {
            throw new Error('No se encontró el médico autenticado en el departamento');
        }

        // Verificar que la cita existe y pertenece al médico
        const citaUrl = `http://localhost:3003/employees/citas/${idCita}`;
        let cita;
        try {
            const response = await this.httpService.axiosRef.get(citaUrl);
            cita = response.data;
        } catch (error) {
            throw new Error('No se encontró la cita especificada');
        }

        if (cita.idMedico !== medicoAutenticado.idMedico) {
            throw new Error('La cita no pertenece al médico autenticado');
        }

        return cita;
    }

    private verifyAppointmentTimeWindow(fechaYHora: string) {
        const now = new Date();
        const appointmentTime = new Date(fechaYHora);
        const timeDiff = Math.abs(appointmentTime.getTime() - now.getTime()) / (1000 * 60); // diferencia en minutos

        // Solo permitir operaciones durante la franja de 30 minutos de la cita
        if (timeDiff > 30) {
            throw new Error('Solo se pueden realizar operaciones durante la franja horaria de la cita (30 minutos)');
        }
    }

    private validateTimeSlot(fechaYHora: string) {
        const date = new Date(fechaYHora);
        const minutes = date.getMinutes();

        // Solo permitir franjas exactas: HH:00 o HH:30
        if (minutes !== 0 && minutes !== 30) {
            throw new Error('Los horarios de citas deben ser en franjas de 30 minutos exactos (HH:00 o HH:30)');
        }
    }
}
