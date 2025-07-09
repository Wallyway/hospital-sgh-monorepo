import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Query,
    Param,
    Req,
    Res,
    HttpStatus,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import * as jwt from 'jsonwebtoken';

@Controller('appointments')
export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) { }

    @Get('specialties')
    async getSpecialties() {
        console.log('[AppointmentController] GET /appointments/specialties');
        const result = await this.appointmentService.getSpecialties();
        console.log('[AppointmentController] Result specialties:', result);
        return result;
    }

    @Get('available-medics')
    async getAvailableMedics(
        @Query('specialty') specialty: string,
        @Query('date') date: string,
        @Query('time') time: string,
    ) {
        console.log('[AppointmentController] GET /appointments/available-medics', { specialty, date, time });
        const result = await this.appointmentService.getAvailableMedics(specialty, date, time);
        console.log('[AppointmentController] Result available-medics:', result);
        return result;
    }

    @Get()
    async getAppointments(@Query() query: any, @Req() req: any, @Res() res: any) {
        // Log headers recibidos
        console.log('[AppointmentController] Headers recibidos:', req.headers);
        // Extraer user de req.user o decodificar JWT
        let user = req.user;
        if (!user) {
            // Extraer el token del header Authorization
            const authHeader = req.headers['authorization'] || '';
            const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
            let decoded: any = {};
            if (token) {
                try {
                    decoded = jwt.decode(token);
                } catch (e) {
                    console.error('[AppointmentController] Error decoding JWT:', e);
                }
            }
            user = {
                idPaciente: decoded?.sub,
                role: decoded?.role,
                email: decoded?.email,
            };
        }
        console.log('[AppointmentController] GET /appointments - user:', user, 'query:', query);

        // Determinar el tipo de usuario y obtener las citas correspondientes
        if (user?.role === 'MEDIC') {
            // Médico: obtener sus propias citas
            try {
                const result = await this.appointmentService.getMedicAppointments(user);
                console.log('[AppointmentController] Medic appointments retrieved successfully:', result);
                return res.status(HttpStatus.OK).json(result);
            } catch (error: any) {
                console.error('[AppointmentController] Error getting medic appointments:', error);
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message || error });
            }
        } else {
            // Paciente: obtener sus propias citas
            try {
                const result = await this.appointmentService.getAppointments(user);
                console.log('[AppointmentController] Patient appointments retrieved successfully:', result);
                return res.status(HttpStatus.OK).json(result);
            } catch (error: any) {
                console.error('[AppointmentController] Error getting patient appointments:', error);
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message || error });
            }
        }
    }

    @Post()
    async createAppointment(@Body() body: Record<string, any>, @Req() req: any, @Res() res: any) {
        // Log headers recibidos
        console.log('[AppointmentController] Headers recibidos:', req.headers);
        // Extraer user de req.user o decodificar JWT
        let user = req.user;
        if (!user) {
            // Extraer el token del header Authorization
            const authHeader = req.headers['authorization'] || '';
            const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
            let decoded: any = {};
            if (token) {
                try {
                    decoded = jwt.decode(token);
                } catch (e) {
                    console.error('[AppointmentController] Error decoding JWT:', e);
                }
            }
            user = {
                idPaciente: decoded?.sub,
                role: decoded?.role,
                email: decoded?.email,
            };
        }
        console.log('[AppointmentController] POST /appointments - body:', body, 'user:', user);
        try {
            const result = await this.appointmentService.createAppointment(body, user);
            console.log('[AppointmentController] Appointment created successfully:', result);
            return res.status(HttpStatus.CREATED).json(result);
        } catch (error: any) {
            console.error('[AppointmentController] Error creating appointment:', error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message || error });
        }
    }

    @Delete(':id')
    async cancelAppointment(@Param('id') id: string, @Req() req: any, @Res() res: any) {
        // Log headers recibidos
        console.log('[AppointmentController] Headers recibidos:', req.headers);
        // Extraer user de req.user o decodificar JWT
        let user = req.user;
        if (!user) {
            // Extraer el token del header Authorization
            const authHeader = req.headers['authorization'] || '';
            const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
            let decoded: any = {};
            if (token) {
                try {
                    decoded = jwt.decode(token);
                } catch (e) {
                    console.error('[AppointmentController] Error decoding JWT:', e);
                }
            }
            user = {
                idPaciente: decoded?.sub,
                role: decoded?.role,
                email: decoded?.email,
            };
        }
        console.log('[AppointmentController] DELETE /appointments/:id - id:', id, 'user:', user);
        try {
            const result = await this.appointmentService.cancelAppointment(Number(id), user);
            console.log('[AppointmentController] Appointment cancelled successfully:', result);
            return res.status(HttpStatus.OK).json(result);
        } catch (error: any) {
            console.error('[AppointmentController] Error cancelling appointment:', error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message || error });
        }
    }
}
