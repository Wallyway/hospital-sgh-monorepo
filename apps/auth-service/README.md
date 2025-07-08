<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


# Servicio de Autenticación (auth-service)

## Actualizaciones recientes

- El JWT emitido ahora contiene el campo `role` (singular), con valores posibles: `ADMIN`, `MEDIC`, `PATIENT`, `ROOT`.
- El login recibe el campo `role` desde el frontend y valida que el usuario pertenezca a ese rol (simulado o real según la variable de entorno `USE_ROLE_SIMULATION`).
- El campo `role` se propaga como header `X-User-Role` a través del API Gateway.
- El flujo de autorización en el sistema se basa en el valor de `role` en el JWT y en los headers.

## Validación de roles

- Si `USE_ROLE_SIMULATION=true` (por defecto), la validación de rol es simulada y siempre exitosa (útil para desarrollo y pruebas).
- Si `USE_ROLE_SIMULATION=false`, el servicio consulta al microservicio de empleados para validar que el usuario pertenezca al rol indicado antes de emitir el JWT.
- El JWT solo se emite si la validación es exitosa.

## Headers propagados

- El API Gateway propaga el header `X-User-Role` a los microservicios destino, junto con `X-User-Id` y `X-User-Email`.

## Flujo de autenticación y autorización

1. El usuario selecciona su tipo (rol) en el frontend y se loguea.
2. El backend valida que el usuario pertenezca a ese rol (simulado o real).
3. El JWT emitido contiene el campo `role`.
4. El API Gateway valida el JWT y propaga el header `X-User-Role`.
5. Los microservicios pueden autorizar acciones basadas en el valor de `X-User-Role`.

## Seguridad y buenas prácticas

- El rol no se guarda explícitamente en la base de datos, sino que se deduce en tiempo real según la lógica de especialización por tablas.
- El flujo es compatible con la arquitectura de microservicios y la lógica de dominio actual.

## Architectural Context

Este es el **Authentication Service** para el monorepo SGH. Es un microservicio dedicado a la gestión de usuarios y autenticación, y forma parte de un ecosistema de microservicios.

**Importante:** Este servicio debe ser accedido únicamente a través del **API Gateway** (`apps/api-gateway`), que actúa como punto de entrada único para el sistema.

---

## Setup

### 1. Variables de Entorno
Crea un archivo `.env` en el directorio `apps/auth-service` con las siguientes variables:

```env
# Puerto del servicio de autenticación
PORT=3001

# Secreto JWT compartido con el API Gateway
JWT_SECRET="your-super-secret-and-long-jwt-key"

# URL de conexión a la base de datos PostgreSQL
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"

# URL del microservicio de roles (puede incluir host y puerto)
ROLES_SERVICE_URL="http://localhost:3002/department-service/rol"
```

### 2. Instalación y Build
Desde la raíz del monorepo:

```bash
npm install
npm run build
```

### 3. Sincronización de Base de Datos
Desde `apps/auth-service`:

```bash
npx prisma migrate dev
npx prisma generate
```

---
## API Endpoints y Documentación

Todos los endpoints están documentados y pueden ser explorados/interactuados vía Swagger en:

```
http://localhost:3001/api
```

### Endpoints principales

- `POST /auth/medic/login`: Login de usuario médico.
- `POST /auth/patient/login`: Login de usuario paciente.
- `POST /auth/admin/login`: Login de usuario administrador.
- `POST /auth/root/login`: Login de usuario root.
- `POST /auth/medic/forgot-password`: Inicia el flujo de recuperación de contraseña para médico.
- `POST /auth/patient/forgot-password`: Inicia el flujo de recuperación de contraseña para paciente.
- `POST /auth/admin/forgot-password`: Inicia el flujo de recuperación de contraseña para administrador.
- `POST /auth/root/forgot-password`: Inicia el flujo de recuperación de contraseña para root.
- `POST /auth/medic/reset-password`: Completa el flujo de recuperación de contraseña para médico.
- `POST /auth/patient/reset-password`: Completa el flujo de recuperación de contraseña para paciente.
- `POST /auth/admin/reset-password`: Completa el flujo de recuperación de contraseña para administrador.
- `POST /auth/root/reset-password`: Completa el flujo de recuperación de contraseña para root.
- `POST /auth/root/create-user/:role`: **(Solo root/super usuario)** Crea un usuario del tipo especificado (`PATIENT`, `MEDIC`, `ADMIN`).
- `POST /auth/dev/bootstrap-superuser`: Genera un super usuario temporal (solo desarrollo, no se almacena en la base de datos).
- `GET /auth/root/users`: **(Solo root/super usuario)** Obtiene la lista de todos los usuarios registrados en el sistema.

Todos los endpoints y DTOs están documentados con Swagger.

---
## User & Role Creation Flow

- El **super usuario** (root) es temporal, no se almacena en la base de datos y se genera solo para propósitos de arranque/desarrollo usando `/auth/dev/bootstrap-superuser`. Sus credenciales se imprimen en consola y pueden usarse para autenticarse y crear usuarios reales.
- El super usuario puede crear nuevos usuarios usando `/auth/root/create-user/:role`.
- El rol (`PATIENT`, `MEDIC`, `ADMIN`,`ROOT`) se pasa por la URL y **no se almacena en la base de datos local**; se envía al microservicio de roles vía HTTP.
- El usuario se crea en la base de datos local y luego se asigna el rol en el microservicio de roles.
- La contraseña inicial se imprime en consola (simulación de envío seguro).
- No existe endpoint público de registro.

---
## Variables de Entorno Importantes

- `ROLES_SERVICE_URL`: URL completa del microservicio de roles (incluye host y puerto). Permite flexibilidad para diferentes entornos.
- Si no se define, se usará el valor por defecto `http://roles-microservice/roles`.

---
## Seguridad y Buenas Prácticas

- **JWT**: Tokens con expiración de 60 minutos.
- **Contraseñas**: Hasheadas con bcryptjs.
- **Recuperación de contraseña**: Tokens de un solo uso, 30 minutos de validez.
- **RBAC**: El rol se maneja en un microservicio dedicado, no en la base de datos local.
- **Validaciones**: Todos los DTOs tienen validaciones y están documentados con Swagger.
- **Errores**: Manejo robusto de errores y excepciones, con logs y respuestas claras.
- **Swagger**: Documentación interactiva disponible en `/api`.
- **Configuración**: Todas las URLs y secretos sensibles se manejan por variables de entorno.

---
## Testing

Para probar el flujo completo:

1. Inicia el Auth Service y el API Gateway en terminales separadas:

```bash
npm run start:dev -- --workspace=auth-service
npm run start:dev -- --workspace=api-gateway
```

2. Usa Swagger (`/api`) o curl/Postman para interactuar con los endpoints.

---
## Producción y Consideraciones Avanzadas

1. **Email Service**: Reemplaza los `console.log` por un servicio real de emails.
2. **Token Storage**: Considera usar Redis para tokens temporales.
3. **Rate Limiting**: Implementa rate limiting para endpoints sensibles.
4. **Password Policy**: Valida la fortaleza de contraseñas.
5. **Audit Logging**: Loguea intentos de reseteo y acciones admin.
6. **Role Validation**: El API Gateway debe validar JWT y roles.
7. **Admin Activity Logging**: Loguea todas las acciones de admin.
8. **User Creation Validation**: Valida unicidad de email y datos.
9. **Role Assignment Limits**: Considera jerarquía y restricciones de asignación de roles.

---
## Estructura de Archivos

```
apps/auth-service/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts      # Endpoints y documentación Swagger
│   │   ├── auth.service.ts         # Lógica de negocio
│   │   ├── auth.module.ts          # Configuración del módulo
│   │   └── jwt.strategy.ts         # Estrategia JWT
│   │   
│   ├── users/
│   │   └── users.service.ts        # Servicio de usuarios
│   ├── roles/
│   │   └── roles.service.ts        # Servicio para integración con microservicio de roles
│   └── prisma.service.ts           # Servicio de base de datos
├── dto/
│   ├── login.dto.ts                # DTO login
│   ├── create-user-admin.dto.ts    # DTO creación de usuario
│   ├── forgot-password.dto.ts      # DTO recuperación de contraseña
│   ├── reset-password.dto.ts       # DTO reset de contraseña
│   └── create-user-phone.dto.ts    # DTO para agregar teléfono
└── prisma/
    └── schema.prisma               # Esquema de base de datos
```

---
## Notas sobre enums compartidos entre TypeScript y Prisma

- Los enums como `UserRole` existen tanto en TypeScript (`common-types`) como en Prisma (`schema.prisma`).
- Prisma y TypeScript **no comparten enums automáticamente**; deben mantenerse sincronizados manualmente.
- Enum en Prisma: para la base de datos.
- Enum en TypeScript: para el código de la app.

---
## Swagger y Documentación

- Todos los endpoints y DTOs principales están documentados con Swagger.
- Accede a la documentación interactiva en `/api`.
- Usa los ejemplos y descripciones para probar y consumir la API de forma sencilla.

## Cambios recientes
- Los endpoints de autenticación ahora son específicos por rol:
  - `/auth/medic/login`
  - `/auth/patient/login`
  - `/auth/admin/login`
  - `/auth/root/login`
  - `/auth/medic/forgot-password`
  - `/auth/patient/forgot-password`
  - `/auth/admin/forgot-password`
  - `/auth/root/forgot-password`
  - `/auth/medic/reset-password`
  - `/auth/patient/reset-password`
  - `/auth/admin/reset-password`
  - `/auth/root/reset-password`
- El campo `role` ya **no** se envía en el body, sino que se infiere de la URL.

## Ejemplos de request

### Login
POST `/auth/medic/login`
```json
{
  "email": "medico@mail.com",
  "password": "password123"
}
```

### Forgot Password
POST `/auth/patient/forgot-password`
```json
{
  "email": "paciente@mail.com"
}
```

### Reset Password
POST `/auth/admin/reset-password`
```json
{
  "token": "reset-token",
  "newPassword": "nuevaClave123"
}
```

## Notas
- El JWT emitido sigue incluyendo el campo `role`, pero este se determina por la ruta utilizada.
- El frontend debe apuntar a la ruta correspondiente según el tipo de usuario.
- Los endpoints antiguos `/auth/login`, `/auth/forgot-password`, `/auth/reset-password` han sido eliminados.

## Endpoints públicos
- Todos los endpoints de login, forgot-password y reset-password por rol son públicos (no requieren JWT).

## Endpoints protegidos
- La creación de usuarios y otras operaciones administrativas siguen protegidas y requieren autenticación y rol adecuado. 

## Endpoints

### GET /auth/admin/medics

- **Descripción:** Devuelve la lista de médicos registrados. Solo accesible para usuarios con rol ADMIN.
- **Headers requeridos:**
  - x-user-role: ADMIN
- **Respuesta exitosa (200):**
```json
[
  {
    "idUsuario": "123456789",
    "nombre": "Dr. House",
    "email": "house@mail.com"
  },
  {
    "idUsuario": "987654321",
    "nombre": "Dra. Grey",
    "email": "grey@mail.com"
  }
]
```
- **Errores:**
  - 403 Forbidden: Solo el usuario ADMIN puede acceder. 

### GET /auth/admin/patients

- **Descripción:** Devuelve la lista de pacientes registrados. Solo accesible para usuarios con rol ADMIN.
- **Headers requeridos:**
  - x-user-role: ADMIN
- **Respuesta exitosa (200):**
```json
[
  {
    "idUsuario": "1234567890",
    "nombre": "Juan",
    "email": "patient@mail.com"
  },
  {
    "idUsuario": "9876543210",
    "nombre": "Ana",
    "email": "ana.patient@mail.com"
  }
]
```
- **Errores:**
  - 403 Forbidden: Solo el usuario ADMIN puede acceder. 