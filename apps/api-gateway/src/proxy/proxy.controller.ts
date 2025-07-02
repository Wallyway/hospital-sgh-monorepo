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

  // == PROTECTED CATCH-ALL ROUTE ==
  // All other routes are caught by this handler and are protected by the JWT guard.
  @UseGuards(JwtAuthGuard)
  @All('*')
  async proxyProtectedRoutes(@Req() req: Request, @Res() res: Response) {
    const { method, originalUrl, body, headers, user } = req as any; // 'user' is attached by JwtAuthGuard

    // Copiar todos los headers originales, excluyendo 'host'
    const forwardedHeaders = { ...headers };
    delete forwardedHeaders['host'];
    // Sobrescribir/agregar los headers de usuario autenticado
    forwardedHeaders['X-User-Id'] = user?.userId;
    forwardedHeaders['X-User-Email'] = user?.email;
    forwardedHeaders['X-User-Role'] = user?.role;

    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );

    res.status(recipientResponse.status).json(recipientResponse.data);
  }

  @Post('auth/root/create-user/:role')
  async proxyRootCreateUser(@Req() req: any, @Res() res: any) {
    // El usuario autenticado debe tener el rol ROOT
    const user = req.user;
    if (!user || !user.role || user.role !== 'ROOT') {
      throw new ForbiddenException(
        'Only the super user (ROOT) can create users',
      );
    }
    // Copiar todos los headers relevantes, excluyendo 'host'
    const forwardedHeaders = { ...req.headers };
    delete forwardedHeaders['host'];

    const { method, originalUrl, body } = req;
    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      forwardedHeaders,
    );
    res.status(recipientResponse.status).json(recipientResponse.data);
  }
}
