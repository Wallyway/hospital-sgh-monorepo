# Cardiology Service (cardiology-service)

## Descripción

Este microservicio es responsable de la gestión de empleados y su especialización en el dominio de Cardiología. Consume eventos publicados por el role-assignment-service para crear registros en las tablas Empleado, Medico y PAdministrativo según el rol solicitado.

---

## Integración y flujo de especialización

1. **Recepción de evento:** El servicio escucha la cola Redis (QueueT) y consume eventos de especialización (`DoctorSpecializationRequested`, `AdminSpecializationRequested`).
2. **Creación de empleado:** Al recibir un evento, crea un registro en la tabla `Empleado` si no existe para el usuario.
3. **Especialización:**
   - Si el evento es `DoctorSpecializationRequested`, crea un registro en la tabla `Medico` (requiere campo `sueldo`).
   - Si el evento es `AdminSpecializationRequested`, crea un registro en la tabla `PAdministrativo` (requiere campo `sueldo`).
   - Valida que no existan especializaciones incompatibles (no puede ser MEDIC y ADMIN a la vez).
4. **Persistencia:** Los datos se almacenan en la base de datos local de Cardiología, siguiendo el modelo relacional definido en `schema.prisma` y alineado con el SQL de cardiologia.sql.

---

## Ejemplo de payload recibido

```json
{
  "userId": 123456789,
  "role": "MEDIC",
  "timestamp": "2025-07-07T04:14:01.888Z",
  "email": "medic@mail.com",
  "name": "Juan",
  "sueldo": 3500000
}
```

- El campo `sueldo` es **obligatorio** para los roles MEDIC y ADMIN. Si no se recibe o no es válido, el evento será rechazado.
- Para otros roles, el campo `sueldo` es ignorado.

---

## Notas
- El microservicio valida que un usuario no pueda ser MEDIC y ADMIN a la vez.
- El campo `sueldo` no se almacena en Auth Service, solo en las tablas especializadas de Cardiología.
- El modelo de datos y las relaciones están alineados con el SQL de `cardiologia.sql` y el diagrama MER.
- El servicio está preparado para ser extendido a otras especializaciones y lógica de negocio en el futuro. 