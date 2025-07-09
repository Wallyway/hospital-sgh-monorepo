import {
    Controller,
    Get,
    Post,
    Body,
    Query,
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
}
