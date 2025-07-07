/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as QueueT from '@tradologics/queuet';

@Injectable()
export class EventPublisherService {
  private readonly logger = new Logger(EventPublisherService.name);
  private readonly queueName: string;

  constructor(private configService: ConfigService) {
    this.queueName = this.configService.get<string>(
      'QUEUE_NAME',
      'hospital_events',
    );
    const redisHost = this.configService.get<string>('REDIS_HOST', 'localhost');
    const redisPort = this.configService.get<number>('REDIS_PORT', 6379);
    const redisPassword = this.configService.get<string>('REDIS_PASSWORD', '');
    QueueT.initialize(this.queueName, {
      host: redisHost,
      port: redisPort,
      password: redisPassword,
      tls: true,
    });
    this.logger.log(
      `QueueT initialized for queue: ${this.queueName} on Redis: ${redisHost}:${redisPort}`,
    );
  }

  async publishEvent(eventType: string, payload: any) {
    const message = { eventType, payload };
    await QueueT.publish(JSON.stringify(message));
    this.logger.log(
      `Published event: ${eventType} with payload: ${JSON.stringify(payload)}`,
    );
  }
}
