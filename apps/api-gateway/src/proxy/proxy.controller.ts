/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  All,
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  ForbiddenException,
  Get,
  Patch,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from './proxy.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@Controller()
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) { }

  // == PUBLIC ROUTES ==
  // These routes are explicitly public and do not pass any auth headers.
  @Public()
  @Post([
    'auth/medic/login',
    'auth/patient/login',
    'auth/admin/login',
    'auth/root/login',
    'auth/medic/forgot-password',
    'auth/patient/forgot-password',
    'auth/admin/forgot-password',
    'auth/root/forgot-password',
    'auth/medic/reset-password',
    'auth/patient/reset-password',
    'auth/admin/reset-password',
    'auth/root/reset-password',
    'auth/dev/bootstrap-superuser',
  ])
  async proxyPublicRoutes(@Req() req: Request, @Res() res: Response) {
    const { method, originalUrl, body, headers } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      {
        'Content-Type': headers['content-type'],
      },
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  // == SPECIFIC PROTECTED ROUTES ==
  // These routes must be BEFORE the catch-all to be matched correctly.
  @UseGuards(JwtAuthGuard)
  @Post('auth/root/create-user/:role')
  async proxyRootCreateUser(@Req() req: any, @Res() res: any) {
    const user = req.user;
    if (!user || !user.role || user.role !== 'ROOT') {
      throw new ForbiddenException(
        'Only the super user (ROOT) can create users',
      );
    }
    // Solo enviar headers esenciales, sin Authorization
    const forwardedHeaders = {
      'Content-Type': req.headers['content-type'],
    };
    const { method, originalUrl, body } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/admin/create-patient')
  async proxyAdminCreatePatient(@Req() req: any, @Res() res: any) {
    const user = req.user;
    if (!user || !user.role || user.role !== 'ADMIN') {
      throw new ForbiddenException('Only an ADMIN can create a patient');
    }
    // Reenviar Authorization y Content-Type
    const forwardedHeaders = {
      'Content-Type': req.headers['content-type'],
      Authorization: req.headers['authorization'],
    };
    const { method, originalUrl, body } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/admin/medics')
  async proxyAdminGetMedics(@Req() req: any, @Res() res: any) {
    const user = req.user;
    if (!user || !user.role || user.role !== 'ADMIN') {
      throw new ForbiddenException('Only an ADMIN can get the list of medics');
    }
    const forwardedHeaders = {
      'Content-Type': req.headers['content-type'],
      Authorization: req.headers['authorization'],
      'x-user-role': user?.role,
    };
    const { method, originalUrl, body } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/admin/patients')
  async proxyAdminGetPatients(@Req() req: any, @Res() res: any) {
    const user = req.user;
    if (!user || !user.role || user.role !== 'ADMIN') {
      throw new ForbiddenException('Only an ADMIN can get the list of patients');
    }
    const forwardedHeaders = {
      'Content-Type': req.headers['content-type'],
      Authorization: req.headers['authorization'],
      'x-user-role': user?.role,
    };
    const { method, originalUrl, body } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('auth/admin/patients/:id')
  async proxyAdminUpdatePatient(@Req() req: any, @Res() res: any) {
    const user = req.user;
    if (!user || !user.role || user.role !== 'ADMIN') {
      throw new ForbiddenException('Only an ADMIN can update a patient');
    }
    const forwardedHeaders = {
      'Content-Type': req.headers['content-type'],
      Authorization: req.headers['authorization'],
      'x-user-role': user?.role,
    };
    const { method, originalUrl, body } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('auth/patient/profile')
  async proxyPatientUpdateProfile(@Req() req: any, @Res() res: any) {
    const user = req.user;
    if (!user || !user.role || user.role !== 'PATIENT') {
      throw new ForbiddenException('Only a PATIENT can update their profile');
    }
    const forwardedHeaders = {
      'Content-Type': req.headers['content-type'],
      Authorization: req.headers['authorization'],
      'x-user-role': user?.role,
      'x-user-id': user?.userId || user?.sub,
    };
    const { method, originalUrl, body } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  // == PROTECTED CATCH-ALL ROUTE ==
  // All other routes are caught by this handler and are protected by the JWT guard.
  @UseGuards(JwtAuthGuard)
  @All('*')
  async proxyProtectedRoutes(@Req() req: Request, @Res() res: Response) {
    const { method, originalUrl, body, headers, user } = req as any; // 'user' is attached by JwtAuthGuard

    // Copiar todos los headers originales, excluyendo 'host'
    const forwardedHeaders = { ...headers };
    delete forwardedHeaders['host'];
    // Si es /auth/admin/create-patient, NO reenviar Authorization
    if (originalUrl.startsWith('/auth/admin/create-patient')) {
      delete forwardedHeaders['authorization'];
    }
    // Sobrescribir/agregar los headers de usuario autenticado
    forwardedHeaders['X-User-Id'] = user?.userId;
    forwardedHeaders['X-User-Email'] = user?.email;
    forwardedHeaders['X-User-Role'] = user?.role;

    // Log para depuración
    console.log('Proxying request to:', method, originalUrl);
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    console.log('Received response from service:', recipientResponse.status);
    res.status(recipientResponse.status).json(recipientResponse.data);
  }
}
