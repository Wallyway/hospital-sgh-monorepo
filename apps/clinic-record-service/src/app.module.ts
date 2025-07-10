import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientService } from './patient/patient.service';
import { QueueSubscriberService } from './event/queue.subscriber';
import { PatientController } from './patient/patient.controller';

@Module({
  imports: [],
  controllers: [AppController, PatientController],
  providers: [AppService, PatientService, QueueSubscriberService],
})
export class AppModule {}
