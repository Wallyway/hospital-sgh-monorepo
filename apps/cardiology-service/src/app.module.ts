import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EmployeesService } from './employees/employees.service';
import { EventSubscriberService } from './events/event.subscriber';
import { EmployeesController } from './employees/employees.controller';
import { EquipmentController } from './equipment.controller';

@Module({
  imports: [],
  controllers: [EmployeesController, EquipmentController],
  providers: [PrismaService, EmployeesService, EventSubscriberService],
})
export class AppModule {}
