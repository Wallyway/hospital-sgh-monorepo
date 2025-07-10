/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
  Patch,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import * as jwt from 'jsonwebtoken';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

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
    console.log('[AppointmentController] GET /appointments/available-medics', {
      specialty,
      date,
      time,
    });
    const result = await this.appointmentService.getAvailableMedics(
      specialty,
      date,
      time,
    );
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
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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
    console.log(
      '[AppointmentController] GET /appointments - user:',
      user,
      'query:',
      query,
    );

    // Determinar el tipo de usuario y obtener las citas correspondientes
    if (user?.role === 'MEDIC') {
      // Médico: obtener sus propias citas
      try {
        const result = await this.appointmentService.getMedicAppointments(user);
        console.log(
          '[AppointmentController] Medic appointments retrieved successfully:',
          result,
        );
        return res.status(HttpStatus.OK).json(result);
      } catch (error: any) {
        console.error(
          '[AppointmentController] Error getting medic appointments:',
          error,
        );
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: error.message || error });
      }
    } else {
      // Paciente: obtener sus propias citas
      try {
        const result = await this.appointmentService.getAppointments(user);
        console.log(
          '[AppointmentController] Patient appointments retrieved successfully:',
          result,
        );
        return res.status(HttpStatus.OK).json(result);
      } catch (error: any) {
        console.error(
          '[AppointmentController] Error getting patient appointments:',
          error,
        );
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: error.message || error });
      }
    }
  }

  @Post()
  async createAppointment(
    @Body() body: Record<string, any>,
    @Req() req: any,
    @Res() res: any,
  ) {
    // Log headers recibidos
    console.log('[AppointmentController] Headers recibidos:', req.headers);
    // Extraer user de req.user o decodificar JWT
    let user = req.user;
    if (!user) {
      // Extraer el token del header Authorization
      const authHeader = req.headers['authorization'] || '';
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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
    console.log(
      '[AppointmentController] POST /appointments - body:',
      body,
      'user:',
      user,
    );
    try {
      const result = await this.appointmentService.createAppointment(
        body,
        user,
      );
      console.log(
        '[AppointmentController] Appointment created successfully:',
        result,
      );
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error: any) {
      console.error(
        '[AppointmentController] Error creating appointment:',
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  @Delete(':id')
  async cancelAppointment(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: any,
  ) {
    // Log headers recibidos
    console.log('[AppointmentController] Headers recibidos:', req.headers);
    // Extraer user de req.user o decodificar JWT
    let user = req.user;
    if (!user) {
      // Extraer el token del header Authorization
      const authHeader = req.headers['authorization'] || '';
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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
    console.log(
      '[AppointmentController] DELETE /appointments/:id - id:',
      id,
      'user:',
      user,
    );
    try {
      const result = await this.appointmentService.cancelAppointment(
        Number(id),
        user,
      );
      console.log(
        '[AppointmentController] Appointment cancelled successfully:',
        result,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error: any) {
      console.error(
        '[AppointmentController] Error cancelling appointment:',
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  // ===== ENDPOINTS PARA MÉDICOS =====

  @Get('diagnoses')
  async getDiagnoses(@Req() req: any, @Res() res: any) {
    console.log('[AppointmentController] GET /appointments/diagnoses');
    try {
      const result = await this.appointmentService.getDiagnoses();
      console.log(
        '[AppointmentController] Diagnoses retrieved successfully:',
        result,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error: any) {
      console.error('[AppointmentController] Error getting diagnoses:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  @Post(':id/diagnoses')
  async addDiagnoses(
    @Param('id') id: string,
    @Body() body: { diagnosticos: number[] },
    @Req() req: any,
    @Res() res: any,
  ) {
    console.log(
      '[AppointmentController] POST /appointments/:id/diagnoses - id:',
      id,
      'body:',
      body,
    );
    // Extraer user de req.user o decodificar JWT
    let user = req.user;
    if (!user) {
      // Extraer el token del header Authorization
      const authHeader = req.headers['authorization'] || '';
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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
    console.log('[AppointmentController] User for addDiagnoses:', user);
    try {
      const result = await this.appointmentService.addDiagnoses(
        Number(id),
        body.diagnosticos,
        user,
      );
      console.log(
        '[AppointmentController] Diagnoses added successfully:',
        result,
      );
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error: any) {
      console.error('[AppointmentController] Error adding diagnoses:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  @Get('medications')
  async getMedications(@Req() req: any, @Res() res: any) {
    console.log('[AppointmentController] GET /appointments/medications');
    try {
      const result = await this.appointmentService.getMedications();
      console.log(
        '[AppointmentController] Medications retrieved successfully:',
        result,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error: any) {
      console.error(
        '[AppointmentController] Error getting medications:',
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  @Post(':id/prescriptions')
  async addPrescriptions(
    @Param('id') id: string,
    @Body()
    body: {
      prescripciones: Array<{
        idMedicamento: number;
        posologia: string;
        esParticular: boolean;
      }>;
    },
    @Req() req: any,
    @Res() res: any,
  ) {
    console.log(
      '[AppointmentController] POST /appointments/:id/prescriptions - id:',
      id,
      'body:',
      body,
    );
    // Extraer user de req.user o decodificar JWT
    let user = req.user;
    if (!user) {
      // Extraer el token del header Authorization
      const authHeader = req.headers['authorization'] || '';
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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
    console.log('[AppointmentController] User for addPrescriptions:', user);
    try {
      const result = await this.appointmentService.addPrescriptions(
        Number(id),
        body.prescripciones,
        user,
      );
      console.log(
        '[AppointmentController] Prescriptions added successfully:',
        result,
      );
      return res.status(HttpStatus.CREATED).json(result);
    } catch (error: any) {
      console.error(
        '[AppointmentController] Error adding prescriptions:',
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  @Post(':id/finish')
  async finishAppointment(
    @Param('id') id: string,
    @Body() body: { resumen: string },
    @Req() req: any,
    @Res() res: any,
  ) {
    console.log(
      '[AppointmentController] POST /appointments/:id/finish - id:',
      id,
      'body:',
      body,
    );
    // Extraer user de req.user o decodificar JWT
    let user = req.user;
    if (!user) {
      // Extraer el token del header Authorization
      const authHeader = req.headers['authorization'] || '';
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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
    console.log('[AppointmentController] User for finishAppointment:', user);
    try {
      const result = await this.appointmentService.finishAppointment(
        Number(id),
        body.resumen,
        user,
      );
      console.log(
        '[AppointmentController] Appointment finished successfully:',
        result,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error: any) {
      console.error(
        '[AppointmentController] Error finishing appointment:',
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  // ===== ENDPOINTS PARA ADMINISTRADORES =====

  @Patch(':id')
  async updateAppointment(
    @Param('id') id: string,
    @Body() body: { idMedico?: number; fechaYHora?: string; estado?: string },
    @Req() req: any,
    @Res() res: any,
  ) {
    console.log(
      '[AppointmentController] PATCH /appointments/:id - id:',
      id,
      'body:',
      body,
    );
    // Extraer user de req.user o decodificar JWT
    let user = req.user;
    if (!user) {
      // Extraer el token del header Authorization
      const authHeader = req.headers['authorization'] || '';
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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
    console.log('[AppointmentController] User for updateAppointment:', user);
    try {
      const result = await this.appointmentService.updateAppointment(
        Number(id),
        body,
        user,
      );
      console.log(
        '[AppointmentController] Appointment updated successfully:',
        result,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error: any) {
      console.error(
        '[AppointmentController] Error updating appointment:',
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }

  // ===== ENDPOINTS PARA CONSULTAR GESTIONES ADMINISTRATIVAS =====

  @Get('admin-history')
  async getAdminAppointmentHistory(
    @Req() req: any,
    @Res() res: any,
    @Query('idCita') idCita?: string,
    @Query('idPAdministrativo') idPAdministrativo?: string,
  ) {
    console.log(
      '[AppointmentController] GET /appointments/admin-history - idCita:',
      idCita,
      'idPAdministrativo:',
      idPAdministrativo,
    );

    // Extraer user de req.user o decodificar JWT
    let user = req.user;
    if (!user) {
      // Extraer el token del header Authorization
      const authHeader = req.headers['authorization'] || '';
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
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

    // Verificar que el usuario es un administrador
    if (user?.role !== 'ADMIN') {
      return res.status(HttpStatus.FORBIDDEN).json({
        message:
          'Solo los administradores pueden consultar el historial administrativo',
      });
    }

    try {
      const result = await this.appointmentService.getAdminAppointmentHistory(
        idCita ? Number(idCita) : undefined,
        idPAdministrativo ? Number(idPAdministrativo) : undefined,
      );
      console.log(
        '[AppointmentController] Admin appointment history retrieved successfully:',
        result,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error: any) {
      console.error(
        '[AppointmentController] Error getting admin appointment history:',
        error,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message || error });
    }
  }
}
