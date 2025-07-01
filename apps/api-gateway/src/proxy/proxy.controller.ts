/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { All, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
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
    'auth/login',
    'auth/forgot-password',
    'auth/reset-password',
    'auth/dev/bootstrap-admin',
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
    console.log(
      '[GATEWAY] Entró a proxyProtectedRoutes:',
      req.method,
      req.originalUrl,
    );
    const { method, originalUrl, body, headers, user } = req as any; // 'user' is attached by JwtAuthGuard

    const recipientResponse = await this.proxyService.proxyRequest(
      method,
      originalUrl,
      body,
      {
        'Content-Type': headers['content-type'],
        'X-User-Id': user?.userId,
        'X-User-Email': user?.email,
        'X-User-Roles': Array.isArray(user?.roles)
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          user.roles.join(',')
          : String(user?.roles ?? ''),
      },
    );

    res.status(recipientResponse.status).json(recipientResponse.data);
  }
}
