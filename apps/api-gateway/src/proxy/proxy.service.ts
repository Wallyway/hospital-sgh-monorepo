/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProxyService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private getServiceUrl(path: string): string {
    if (path.startsWith('/auth')) {
      return this.configService.get<string>(
        'AUTH_SERVICE_URL',
        'http://127.0.0.1:3001',
      );
    }

    if (path.startsWith('/roles')) {
      return this.configService.get<string>(
        'ROLES_SERVICE_URL',
        'http://localhost:3002',
      );
    }
    // Add other services here
    // if (path.startsWith('/patients')) {
    //   return process.env.PATIENTS_SERVICE_URL || 'http://localhost:3002';
    // }
    throw new Error('Cannot process request to unknown service.');
  }

  async proxyRequest(
    method: string,
    path: string,
    data: any,
    headers: any,
  ): Promise<AxiosResponse<any>> {
    const serviceUrl = this.getServiceUrl(path);
    const url = `${serviceUrl}${path}`;

    try {
      const config: AxiosRequestConfig = {
        method: method as any,
        url,
        data,
        headers,
        validateStatus: () => true, // Forward all status codes
        timeout: 10000, // 10 segundos
      };

      const response = await firstValueFrom(this.httpService.request(config));
      return response;
    } catch (error) {
      console.error('[ProxyService] Error forwarding request:', error.message);
      throw error;
    }
  }
}
