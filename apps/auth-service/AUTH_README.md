# Authentication Service

## Architectural Context

This is the **Authentication Service** for the SGH monorepo. It is a dedicated microservice responsible for all user authentication, authorization, and management tasks.

**Important**: This service is designed to run as part of a larger microservices ecosystem and is not intended to be accessed directly by clients. All incoming requests should be routed through the central **API Gateway** (`apps/api-gateway`), which acts as the single entry point for the system.

---

## Setup

### 1. Environment Variables
Create a `.env` file in the `apps/auth-service` directory. This file should contain the database connection string and the JWT secret, which must be shared with the API Gateway.

```env
# Port for the Authentication Service
PORT=3001

# The same secret used by the API Gateway to validate tokens
JWT_SECRET="your-super-secret-and-long-jwt-key"

# Connection URL for the PostgreSQL database
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"
```

### 2. Workspace Setup
From the **root of the monorepo**, run the following commands to install dependencies and build shared packages.

```bash
# Install all workspace dependencies
npm install

# Build the common-types package
npm run build
```

### 3. Database Setup
From the `apps/auth-service` directory, run the Prisma commands to synchronize your database with the schema.

```bash
cd apps/auth-service
npx prisma migrate dev
npx prisma generate
```

---
## API Endpoints

This service exposes the following endpoints, which are routed through the API Gateway under the `/auth` path.

- `POST /login`: User login.
- `POST /forgot-password`: Initiates the password reset flow.
- `POST /reset-password`: Completes the password reset flow.
- `POST /admin/create-user/:role`: **(Admin Only)** Creates a new user of the specified role (`patient`, `doctor`, `admin`) with an initial password.

---

## User Creation Flow

- Only an **administrator** can create new users (patients, doctors, etc.) using the `/auth/admin/create-user/:role` endpoint, where `:role` is `patient`, `doctor`, or `admin` (e.g., `/auth/admin/create-user/patient`).
- The admin assigns an initial password and must communicate it al usuario (en desarrollo, la contraseña se imprime en consola para simular el envío seguro).
- The user can log in with these credentials and is encouraged to change their password using the password reset flow.
- **There is no public registration endpoint.**

**Nota:** En desarrollo, los tokens de reseteo de contraseña también se imprimen en consola para simular el envío por email.

---

## Testing

To test the full authentication flow, you must run both the **Authentication Service** and the **API Gateway** simultaneously.

### 1. Start the Services

Open two separate terminals in the monorepo root.

**Terminal 1: Start the Auth Service**
```bash
# This service runs on port 3001 (as defined in its .env)
npm run start:dev -- --workspace=auth-service
```

**Terminal 2: Start the API Gateway**
```bash
# The gateway runs on port 3000 and forwards requests
npm run start:dev -- --workspace=api-gateway
```

### 2. Create a User (Admin Only)

```bash
# 1. Login as admin to get JWT token from the Gateway
ADMIN_TOKEN=$(curl -s -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "admin-password"}' | jq -r .accessToken)

# 2. Use the token to create a new user (e.g., a patient) via the Gateway
curl -X POST http://localhost:3000/auth/admin/create-user/patient \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -d '{
    "email": "patient@example.com",
    "password": "initial-password",
    "name": "Jane Patient",
    "address": "123 Main St"
  }'
```

*La contraseña inicial se imprimirá en la consola del `auth-service` para simular el envío seguro.*

### 3. Patient Login and Password Change
- The patient receives their credentials from the admin.
- The patient logs in at `/auth/login` via the gateway.
- The patient can use the forgot/reset password flow to change their password.

---
## Implementation & Security Details

This service implements a robust, token-based authentication system.

- **Authentication Flow**: Uses JWTs with a 60-minute expiration.
- **Password Reset Flow**: Secure, one-time-use tokens with a 30-minute expiration.
- **Role-Based Access Control (RBAC)**: Leverages a shared `UserRole` enum from `common-types` to ensure system-wide consistency.
- **Admin User Management**: Provides a secure, admin-only endpoint for creating users.
- **Security Features**: All passwords are hashed with `bcryptjs`, and database queries are protected against common vulnerabilities.
- **Error Handling**: Throws specific HTTP exceptions (e.g., `409 Conflict` for duplicate emails) for better client-side error handling.

## Shared Types and Enums

This service uses shared types and enums from the `packages/common-types` package to ensure consistency across the monorepo:

### UserRole Enum
```typescript
import { UserRole } from 'common-types';

// Available roles:
// UserRole.PATIENT - Patient role
// UserRole.DOCTOR - Doctor role  
// UserRole.ADMIN - Administrator role
```

The `UserRole` enum is defined in `packages/common-types/src/enums/user-roles.enum.ts` and is used throughout the authentication system for role-based access control (RBAC).

## File Structure

```
apps/auth-service/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts      # API endpoints
│   │   ├── auth.service.ts         # Business logic
│   │   ├── auth.module.ts          # Module configuration
│   │   ├── jwt.strategy.ts         # JWT validation strategy
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts   # JWT authentication guard
│   │   │   └── roles.guard.ts      # Role-based authorization guard
│   │   └── decorators/
│   │       └── roles.decorator.ts  # Role requirement decorator
│   ├── users/
│   │   └── users.service.ts        # User management service
│   └── prisma.service.ts           # Database service
├── dto/
│   ├── login.dto.ts                # Login request DTO
│   ├── create-user-admin.dto.ts    # Admin user creation DTO
│   ├── forgot-password.dto.ts      # Forgot password DTO
│   └── reset-password.dto.ts       # Reset password DTO
└── prisma/
    └── schema.prisma               # Database schema
```

## Production Considerations

1. **Email Service**: Replace console.log with actual email sending service
2. **Token Storage**: Consider using Redis for better performance with token storage
3. **Rate Limiting**: Implement rate limiting for forgot password requests
4. **Password Policy**: Add validation for password strength
5. **Audit Logging**: Log password reset attempts for security monitoring
6. **Role Validation**: Implement middleware to validate JWT tokens and check role permissions
7. **Admin Activity Logging**: Log all admin actions for audit trails
8. **User Creation Validation**: Add validation for email uniqueness and data integrity
9. **Role Assignment Limits**: Consider implementing role hierarchy and assignment restrictions

## Notas sobre enums compartidos entre TypeScript y Prisma

En este proyecto, los enums como `UserRole` se definen tanto en TypeScript (en el paquete `common-types`) como en el archivo de esquema de Prisma (`schema.prisma`).

- **Enum en TypeScript:** Se usa en el código de la aplicación para tener referencias tipadas y seguras, con autocompletado y validación en tiempo de compilación.
- **Enum en Prisma:** Se usa para definir los valores permitidos en la base de datos y que Prisma genere los tipos y validaciones correspondientes.

**¿Por qué tener ambos?**
- Prisma y TypeScript no comparten enums automáticamente.
- Es importante mantenerlos sincronizados manualmente o con herramientas de generación.
- Así se garantiza integridad en la base de datos y seguridad en el código.

**Resumen:**
- Enum en Prisma: para la base de datos.
- Enum en TypeScript: para el código de la app.
- Es correcto y común tener ambos, pero deben estar sincronizados. 