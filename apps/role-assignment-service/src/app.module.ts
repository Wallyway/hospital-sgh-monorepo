import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RolesModule],
})
export class AppModule {}
