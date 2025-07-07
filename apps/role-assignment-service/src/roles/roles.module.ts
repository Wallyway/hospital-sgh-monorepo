import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { EventPublisherService } from '../events/event.publisher';
import { DblinkService } from '../dblink/dblink.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, EventPublisherService, DblinkService],
})
export class RolesModule {}
