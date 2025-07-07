/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as QueueT from '@tradologics/queuet';
import { EmployeesService } from '../employees/employees.service';

@Injectable()
export class EventSubscriberService implements OnModuleInit {
    private readonly logger = new Logger(EventSubscriberService.name);

    constructor(private employeesService: EmployeesService) { }

    async onModuleInit() {
        QueueT.initialize('hospital_events', {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
            password: process.env.REDIS_PASSWORD,
            tls: true,
        });
        QueueT.subscribe(this.handleMessage.bind(this));
        this.logger.log('Subscribed to hospital_events');
    }

    async handleMessage(id: string, data: string) {
        try {
            const message = JSON.parse(data);
            const { eventType, payload } = message;
            if (
                eventType === 'DoctorSpecializationRequested' ||
                eventType === 'AdminSpecializationRequested'
            ) {
                await this.employeesService.specializeEmployee(payload, eventType);
            }
            // Elimina el mensaje de la cola si fue procesado
            await QueueT.delete(id);
        } catch (error) {
            this.logger.error('Error processing event:', error);
            // Aquí podrías implementar lógica de reintentos o DLQ
        }
    }
}
