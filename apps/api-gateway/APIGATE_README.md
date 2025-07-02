# API Gateway

## Arquitectura y Propósito

El API Gateway es el punto de entrada único para el sistema SGH. Se encarga de:
- Autenticar y autorizar peticiones usando JWT.
- Proteger rutas críticas y exponer solo los endpoints públicos necesarios.
- Propagar headers relevantes y de usuario autenticado a los microservicios destino.

---

## Cambios recientes
- Los endpoints públicos de autenticación ahora son específicos por rol:
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

## Ejemplo de forwarding

El gateway reenvía las rutas públicas de autenticación directamente al microservicio auth-service. Ejemplo:

```
POST /auth/medic/login
{
  "email": "medico@mail.com",
  "password": "password123"
}
```

## Headers propagados
- El gateway sigue propagando los headers `X-User-Id`, `X-User-Email`, `X-User-Role` a los microservicios protegidos.

## Notas
- Los endpoints antiguos `/auth/login`, `/auth/forgot-password`, `/auth/reset-password` han sido eliminados.
- El frontend debe apuntar a la ruta correspondiente según el tipo de usuario.

---

## Autenticación y roles

- El JWT emitido por el `auth-service` ahora contiene el campo `role` (singular), con valores posibles: `ADMIN`, `MEDIC`, `PATIENT`, `ROOT`.
- El API Gateway extrae el campo `role` del JWT y lo adjunta como `user.role` en la request.
- El header propagado a los microservicios es `X-User-Role`.
- La autorización para rutas críticas (como `/auth/root/create-user/:role`) se basa en que `user.role === 'ROOT'`.

---

## Propagación de headers

- Todos los headers originales (excepto `host`) se propagan a los microservicios destino.
- Se sobrescriben/agregan los headers:
  - `X-User-Id`
  - `X-User-Email`
  - `X-User-Role`

Esto asegura trazabilidad, auditoría y autorización correcta en los microservicios.

---

## Flujo de autenticación y autorización

1. El usuario se autentica en `/auth/login` y recibe un JWT con el campo `role`.
2. El frontend incluye el JWT en el header `Authorization` en cada request protegida.
3. El API Gateway valida el JWT y extrae el `role`.
4. El header `X-User-Role` se propaga a los microservicios para autorización y lógica de negocio.
5. Solo el super usuario (`role: ROOT`) puede acceder a rutas críticas como `/auth/root/create-user/:role`.

---

## Seguridad

- No hay endpoints críticos públicos.
- El rol se valida antes de permitir acciones críticas.
- El forwarding de headers es robusto y seguro.

---

## Notas

- Si en el futuro necesitas roles múltiples, deberás cambiar a un array de roles y ajustar el JWT y los headers.
- El flujo actual es compatible con la lógica de especialización por tablas en los microservicios de dominio.

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
  return process.env.AUTH_SERVICE_URL;
}
if (path.startsWith('/patients')) {
  return process.env.PATIENTS_SERVICE_URL;
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
# PATIENTS_SERVICE_URL="http://localhost:3002"
# APPOINTMENTS_SERVICE_URL="http://localhost:3003"
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
