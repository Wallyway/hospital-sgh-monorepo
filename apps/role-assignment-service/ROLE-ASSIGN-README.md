# Role Assignment Service (role-assignment-service)

## Descripción

Este microservicio orquesta la especialización de usuarios en roles específicos (MEDIC, ADMIN, PATIENT) dentro del ecosistema hospitalario. No almacena roles localmente, sino que valida la existencia del usuario en el Auth Service y publica eventos en una cola Redis (QueueT) para que los microservicios de dominio creen las especializaciones correspondientes.

---

## Arquitectura y Flujo

1. **Creación de usuario**: El Auth Service crea el usuario en su base de datos y luego llama al Role Assignment Service para especializarlo en un rol.
2. **Validación**: El Role Assignment Service valida que el usuario exista en la base de datos del Auth Service (vía conexión directa PostgreSQL).
3. **Publicación de evento**: Si el usuario existe, publica un evento en Redis (QueueT) con los datos del usuario y el rol solicitado.
4. **Consumo**: Los microservicios de dominio (ej. CardiologyService, PatientService) consumen estos eventos y crean las especializaciones en sus propias bases de datos.

---

## Endpoints

- `POST /roles/:idUser/:role`
  - **Body**: Información general del usuario (email, name, address, gender, birthDate, idUser, etc.)
  - **Roles soportados**: `MEDIC`, `ADMIN`, `PATIENT`
  - **Respuesta**: Mensaje de éxito o error (404 si el usuario no existe en Auth Service)

---

## Eventos publicados

- `DoctorSpecializationRequested` (para MEDIC)
- `AdminSpecializationRequested` (para ADMIN)
- `PatientSpecializationRequested` (para PATIENT)

**Payload:**
```json
{
  "userId": 123456789,
  "role": "MEDIC|ADMIN|PATIENT",
  "timestamp": "2025-07-07T04:14:01.888Z",
  // ...otros datos generales del usuario
  "sueldo": 3500000 // Obligatorio para MEDIC y ADMIN, opcional para PATIENT
}
```

---

## Integración con otros microservicios

### Auth Service
- Cambió el tipo de `idUser` a `BigInt` en el schema.prisma y en la base de datos.
- Convierte `idUser` a `number` o `string` en las respuestas y payloads para evitar errores de serialización.
- El endpoint de creación de usuario (`/auth/root/create-user/:role`) ahora envía el body completo del usuario al Role Assignment Service.

### Microservicios de dominio
- Deben suscribirse a los eventos publicados en Redis y crear las especializaciones correspondientes en sus propias bases de datos.

---

## Configuración de Redis (QueueT)

- Compatible con Redis local y Redis cloud (Upstash, Redis Cloud, etc.).
- Variables de entorno:
  - `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`, `QUEUE_NAME`
  - Usa `tls: true` para conexiones seguras (cloud).

---

## Validación de usuario

- El servicio valida la existencia del usuario en la base de datos del Auth Service antes de publicar el evento.
- Si el usuario no existe, responde con 404.

---

## Cambios relevantes realizados

- **Auth Service**:
  - Migración de `idUser` a `BigInt`.
  - Conversión de `idUser` a `number`/`string` en payloads y respuestas.
  - Envío del body completo del usuario al Role Assignment Service.
- **Role Assignment Service**:
  - Soporte para roles `MEDIC`, `ADMIN` y `PATIENT`.
  - Publicación de eventos diferenciados por rol.
  - Validación de usuario vía conexión directa a PostgreSQL.
  - Compatibilidad con Redis cloud y local.

---

## Ejemplo de uso

```http
POST /roles/10001831789/MEDIC
Content-Type: application/json

{
  "email": "medic@mail.com",
  "password": "password123",
  "name": "Juan",
  "address": "Calle 123",
  "gender": "M",
  "birthDate": "1990-01-01",
  "idUser": 10001831789,
  "sueldo": 3500000
}
```

- Para los roles MEDIC y ADMIN, el campo `sueldo` es **obligatorio** en el body. Para PATIENT es opcional y será ignorado si se envía.
- El campo `sueldo` **no se almacena en la base de datos de Auth Service**, solo se pasa a los microservicios de dominio para su almacenamiento en las tablas especializadas.

---

## Notas
- No se debe devolver ningún valor `bigint` puro en las respuestas JSON; siempre convertir a `string` o `number`.
- El servicio está preparado para ser extendido a otros roles y eventos en el futuro.
- **Validación de combinaciones de roles incompatibles:**
  - La lógica para evitar combinaciones de roles no permitidas (por ejemplo, que un usuario no pueda ser MEDIC y ADMIN a la vez) debe implementarse en los microservicios de dominio, que son los que conocen el estado real de las especializaciones.
  - El role-assignment-service ya está preparado para consultar estos servicios y rechazar solicitudes inválidas en el futuro (ver bloque TODO en `roles.service.ts`). 