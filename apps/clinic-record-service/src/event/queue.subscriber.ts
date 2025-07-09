/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as QueueT from '@tradologics/queuet';
import { PatientService } from '../patient/patient.service';

@Injectable()
export class QueueSubscriberService implements OnModuleInit {
  private readonly logger = new Logger(QueueSubscriberService.name);
  private readonly queueName = process.env.QUEUE_NAME || 'hospital_events';

  constructor(private patientService: PatientService) { }

  onModuleInit() {
    QueueT.initialize(this.queueName, {
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || '',
      tls: true,
    });
    this.logger.log(`===> Subscribed to queue: ${this.queueName}`);
    QueueT.subscribe(this.handleEvent.bind(this));
  }

  async handleEvent(id: string, data: string) {
    this.logger.log(`===> Evento recibido: id=${id}, data=${data}`);
    try {
      const parsed = JSON.parse(data) as {
        eventType: string;
        payload: any;
      };
      const { eventType, payload } = parsed;
      this.logger.log(`===> Procesando evento: ${eventType} para userId=${payload?.userId}`);
      if (eventType === 'PatientSpecializationRequested') {
        await this.patientService.createPatientFromEvent(payload);
        this.logger.log(
          `===> Procesado PatientSpecializationRequested para user ${payload.userId}`,
        );
      }
      await (QueueT as { delete: (id: string) => Promise<void> }).delete(id);
    } catch (err) {
      this.logger.error('Error processing event:', err);
    }
  }
}
