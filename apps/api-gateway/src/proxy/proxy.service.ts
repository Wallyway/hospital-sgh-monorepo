/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProxyService {
  constructor(private readonly httpService: HttpService) {}

  private getServiceUrl(path: string): string {
    if (path.startsWith('/auth')) {
      return process.env.AUTH_SERVICE_URL || 'http://localhost:3001';
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

    const config: AxiosRequestConfig = {
      method: method as any,
      url,
      data,
      headers,
      validateStatus: () => true, // Forward all status codes
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return firstValueFrom(this.httpService.request(config));
  }
}
