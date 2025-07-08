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

# API Gateway

## Arquitectura y Propósito

El API Gateway es el punto de entrada único para el sistema SGH. Se encarga de:
- Autenticar y autorizar peticiones usando JWT.
- Proteger rutas críticas y exponer solo los endpoints públicos necesarios.
- Propagar headers relevantes y de usuario autenticado a los microservicios destino.

---

## Endpoints Disponibles

### Endpoints Públicos (sin autenticación)
- **Login por rol:**
  - `POST /auth/medic/login`
  - `POST /auth/patient/login`
  - `POST /auth/admin/login`
  - `POST /auth/root/login`
- **Recuperación de contraseña:**
  - `POST /auth/medic/forgot-password`
  - `POST /auth/patient/forgot-password`
  - `POST /auth/admin/forgot-password`
  - `POST /auth/root/forgot-password`
- **Reset de contraseña:**
  - `POST /auth/medic/reset-password`
  - `POST /auth/patient/reset-password`
  - `POST /auth/admin/reset-password`
  - `POST /auth/root/reset-password`
- **Desarrollo:**
  - `POST /auth/dev/bootstrap-superuser`

### Endpoints Protegidos (requieren autenticación JWT)

#### Creación de Usuarios (solo ROOT)
- `POST /auth/root/create-user/:role` - Crear usuario con rol específico
  - **Roles válidos:** `medic`, `admin`, `patient`
  - **Requiere:** Token JWT con rol `ROOT`
  - **Body:** Datos del usuario (email, password, name, address, gender, birthDate, idUser, sueldo*)
  - **Nota:** El campo `sueldo` es obligatorio para roles `medic` y `admin`

#### Especialización de Roles (solo ROOT)
- `POST /roles/:idUser/:role` - Asignar rol adicional a usuario existente
  - **Requiere:** Token JWT con rol `ROOT`
  - **Body:** Datos específicos del rol (sueldo para MEDIC/ADMIN)

#### Otras Rutas Protegidas
- Todas las demás rutas se manejan por el catch-all `@All('*')`

---

## Configuración de Variables de Entorno

```env
# Puerto para el API Gateway
PORT=3000

# El mismo secreto usado por el auth-service para firmar tokens
JWT_SECRET="your-super-secret-and-long-jwt-key"

# URLs para microservicios internos
AUTH_SERVICE_URL="http://localhost:3001"
ROLES_SERVICE_URL="http://localhost:3002"
CARDIOLOGY_SERVICE_URL="http://localhost:3003"
```

---

## Arquitectura de Handlers

### Orden Crítico de Handlers
El orden de los handlers en el `ProxyController` es **crítico** para el funcionamiento correcto:

1. **Public Routes** - Endpoints sin autenticación
2. **Specific Protected Routes** - Endpoints específicos con lógica especial
3. **Catch-all Route** - `@All('*')` para todas las demás rutas

**⚠️ Importante:** Los handlers específicos deben ir **antes** que el catch-all para evitar que sean interceptados incorrectamente.

### Ejemplo de Estructura Correcta
```typescript
@Controller()
export class ProxyController {
  // 1. Public routes
  @Public()
  @Post([...])
  async proxyPublicRoutes(...) { ... }

  // 2. Specific protected routes (ANTES del catch-all)
  @UseGuards(JwtAuthGuard)
  @Post('auth/root/create-user/:role')
  async proxyRootCreateUser(...) { ... }

  // 3. Catch-all (DESPUÉS de las rutas específicas)
  @UseGuards(JwtAuthGuard)
  @All('*')
  async proxyProtectedRoutes(...) { ... }
}
```

---

## Headers y Propagación

### Headers Propagados a Microservicios
- **Todos los headers originales** (excepto `host`)
- **Headers de usuario autenticado:**
  - `X-User-Id`: ID del usuario desde JWT
  - `X-User-Email`: Email del usuario desde JWT
  - `X-User-Role`: Rol del usuario desde JWT

### Headers Especiales para Creación de Usuarios
El endpoint `POST /auth/root/create-user/:role` **solo envía** el header `Content-Type` al Auth Service para evitar conflictos de autenticación.

---

## Flujo de Creación de Usuarios

1. **Cliente** envía petición a `POST /auth/root/create-user/medic` con token ROOT
2. **API Gateway** valida el token y verifica que el usuario tenga rol `ROOT`
3. **API Gateway** reenvía la petición al Auth Service con solo `Content-Type`
4. **Auth Service** crea el usuario y valida especialización con Cardiology Service
5. **Auth Service** llama al Role Assignment Service para asignar el rol
6. **Respuesta** se devuelve al cliente a través del API Gateway

---

## Seguridad

- **Autenticación JWT** para todas las rutas protegidas
- **Autorización por rol** para endpoints críticos
- **Validación de superusuario** para creación de usuarios
- **Headers mínimos** para evitar conflictos de autenticación
- **Timeout de 10 segundos** para evitar cuelgues

---

## Troubleshooting

### Problema: Endpoint se cuelga indefinidamente
**Causa:** Handler específico interceptado por catch-all
**Solución:** Verificar que el handler específico esté **antes** del catch-all

### Problema: Error 500 en creación de usuarios
**Causa:** Headers de autenticación enviados al Auth Service
**Solución:** El handler específico solo debe enviar `Content-Type`

### Problema: Timeout en peticiones
**Causa:** Microservicio destino no responde
**Solución:** Verificar que todos los microservicios estén corriendo

---

## Notas de Desarrollo

- Los logs de debug han sido removidos para producción
- El timeout está configurado en 10 segundos
- Las variables de entorno deben estar correctamente definidas
- El orden de los handlers es crítico para el funcionamiento

---

## Descripción General

El API Gateway es el punto de entrada único para todas las solicitudes de los clientes hacia el backend del sistema de gestión hospitalaria. Es responsable de enrutar las solicitudes entrantes a los microservicios apropiados, así como de proporcionar una capa centralizada para autenticación y seguridad.

Este gateway actúa como un proxy inverso, mejorando la seguridad al ocultar la topología interna de la red y proporcionando una interfaz unificada para los clientes.

## Responsabilidades Clave

1.  **Enrutamiento de Solicitudes**: Redirige dinámicamente las solicitudes a los microservicios internos (`auth-service`, `patients-service`, etc.) según la ruta de la solicitud.
2.  **Autenticación Centralizada**: Valida los JSON Web Tokens (JWT) para todas las rutas protegidas, asegurando que solo las solicitudes autenticadas lleguen a los servicios internos.
3.  **Filtrado de Seguridad**: Actúa como la primera línea de defensa, rechazando solicitudes no autorizadas o inválidas en el borde del sistema.
4.  **Enriquecimiento de Headers**: Inyecta información del usuario (ID, email, rol) desde el payload del JWT en headers HTTP personalizados antes de reenviar la solicitud, permitiendo que los servicios internos sean stateless y confíen en la autenticación del gateway.
5.  **API Unificada**: Presenta una API única y consistente para las aplicaciones cliente, abstrayendo la complejidad de la arquitectura de microservicios subyacente.

## ¿Cómo Funciona?

### 1. Flujo de Solicitud

-   **Rutas Públicas (`/auth/*`)**: Las solicitudes a endpoints públicos como login, forgot-password, reset-password o bootstrap-superuser se reenvían inmediatamente al `auth-service` sin validación de JWT. En el código, estas se manejan con un solo método de controlador usando un decorador `@Post([...])` con múltiples rutas.
-   **Rutas Protegidas (`*`)**: Todas las demás solicitudes son interceptadas por un `JwtAuthGuard` global.
    -   Si el JWT en el header `Authorization` es **válido**, el gateway decodifica su payload. Luego reenvía la solicitud al microservicio destino, agregando los headers `X-User-Id`, `X-User-Email` y `X-User-Role`.
    -   Si el JWT es **inválido o falta**, el gateway rechaza la solicitud con un error `401 Unauthorized` y la solicitud nunca llega a un servicio interno.

### 2. Estrategia de Autenticación (`JwtStrategy`)

La `JwtStrategy` del gateway es ligera. Solo verifica la firma y expiración del token contra el `JWT_SECRET` compartido. **No** consulta la base de datos, ya que confía en que cualquier token firmado correctamente por el `auth-service` es válido.

### 3. Descubrimiento de Servicios

El `ProxyService` contiene la lógica de enrutamiento. Usa la ruta de la solicitud para determinar la URL del microservicio destino a partir de variables de entorno.

```typescript
// Ejemplo de proxy.service.ts
if (path.startsWith('/auth')) {
  return this.configService.get<string>('AUTH_SERVICE_URL', 'http://localhost:3001');
}
if (path.startsWith('/roles')) {
  return this.configService.get<string>('ROLES_SERVICE_URL', 'http://localhost:3002');
}
```

## Configuración y Puesta en Marcha

### 1. Variables de Entorno

Crea un archivo `.env` en el directorio `apps/api-gateway`. Debe contener las URLs de todos los servicios downstream y el secreto JWT compartido.

```env
# Puerto para el API Gateway
PORT=3000

# El mismo secreto usado por el auth-service para firmar tokens
JWT_SECRET="your-super-secret-and-long-jwt-key"

# URLs para microservicios internos
AUTH_SERVICE_URL="http://localhost:3001"
ROLES_SERVICE_URL="http://localhost:3002"
CARDIOLOGY_SERVICE_URL="http://localhost:3003"
```

### 2. Instalación

Desde la raíz del monorepo, ejecuta:

```bash
npm install
```

### 3. Ejecución del Gateway

Puedes ejecutar el gateway desde la raíz del monorepo o desde su propio directorio.

**Desde la raíz del monorepo:**

```bash
npm run start:dev -- --workspace=api-gateway
```

**Desde el directorio del servicio:**

```bash
cd apps/api-gateway
npm run start:dev
```

## Pruebas del Flujo

1.  **Inicia todos los servicios requeridos**, incluyendo el `auth-service` y el `api-gateway`.
2.  **Haz login a través del gateway** enviando una solicitud `POST` a `http://localhost:3000/auth/login`. Recibirás un JWT.
3.  **Accede a una ruta protegida** (cualquier ruta que no sea `/auth/*`) incluyendo el JWT en el header `Authorization`.
    ```
    Authorization: Bearer <tu-jwt-token>
    ```
4.  El gateway validará el token, agregará los headers de usuario y reenviará la solicitud.
5.  Intenta acceder a una ruta protegida sin token; deberías recibir un error `401 Unauthorized` directamente del gateway.

## Notas de Desarrollo

- En desarrollo, los tokens de reseteo de contraseña y las contraseñas iniciales se imprimen en consola para propósitos de simulación. No hay envío real de emails en este entorno.

## Consistencia y Rollback en la Creación de Usuarios

- Cuando se crea un usuario (por ejemplo, MEDIC, ADMIN o PATIENT), el Auth Service primero crea el usuario en su base de datos.
- Luego, intenta especializar al usuario llamando al microservicio correspondiente (roles-service, cardiology-service, etc.).
- **Si ocurre un error durante la especialización** (por ejemplo, si el microservicio de roles/pacientes no está implementado, no responde, o devuelve error), el Auth Service elimina automáticamente el usuario recién creado (rollback manual).
- Esto asegura que **no queden usuarios huérfanos** si la especialización falla, manteniendo la base de datos consistente.
- Este mecanismo aplica para cualquier rol, incluyendo futuros microservicios como `PATIENT`.
