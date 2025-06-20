import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
