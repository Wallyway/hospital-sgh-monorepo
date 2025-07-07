import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module.js';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Auth Service API')
    .setDescription(
      'API para autenticación y gestión de usuarios.\n\nNOTA: Los endpoints de login, forgot-password y reset-password ahora son específicos por rol (ej: /auth/medic/login, /auth/patient/forgot-password, etc). El campo role ya no se envía en el body.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
