import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [AuthModule, ProxyModule],
})
export class AppModule {}
