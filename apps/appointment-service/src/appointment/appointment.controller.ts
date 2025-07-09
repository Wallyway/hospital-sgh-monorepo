/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Post, Body, Query, Req } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get('specialties')
  async getSpecialties() {
    return this.appointmentService.getSpecialties();
  }

  @Get('available-medics')
  async getAvailableMedics(
    @Query('specialty') specialty: string,
    @Query('date') date: string,
    @Query('time') time: string,
  ) {
    return this.appointmentService.getAvailableMedics(specialty, date, time);
  }

  @Post()
  async createAppointment(@Body() body: any, @Req() req: any) {
    return this.appointmentService.createAppointment(body, req.user);
  }
}
