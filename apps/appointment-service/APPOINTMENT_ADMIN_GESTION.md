# Gestión Administrativa de Citas

## Descripción

Se ha implementado un sistema de registro de gestiones administrativas de citas que permite rastrear todas las modificaciones realizadas por el personal administrativo. Cada vez que un administrador modifica una cita, se registra automáticamente en la tabla `PAdmin_Gestiona_Cita`.

## Endpoints Implementados

### 1. Actualizar Cita (PATCH)

**Endpoint:** `PATCH http://localhost:3008/appointments/:id`

**Descripción:** Permite a los administradores actualizar una cita y registra automáticamente la gestión en la tabla `PAdmin_Gestiona_Cita`.

**Headers requeridos:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Body:**
```json
{
  "idMedico": 1,
  "fechaYHora": "2025-01-15T10:00:00.000Z",
  "estado": "R"
}
```

**Campos opcionales:**
- `idMedico`: ID del médico asignado
- `fechaYHora`: Nueva fecha y hora de la cita (formato ISO)
- `estado`: Estado de la cita ('R'=Reservada, 'A'=Asistida, 'P'=Pendiente, 'C'=Cancelada)

**Respuesta exitosa:**
```json
{
  "idCita": 5,
  "idPaciente": 1,
  "idMedico": 1,
  "fechaYHora": "2025-01-15T10:00:00.000Z",
  "estado": "R",
  "resumen": ""
}
```

**Registro automático en PAdmin_Gestiona_Cita:**
- `idPAdministrativo`: Se obtiene automáticamente del token del administrador
- `idCita`: ID de la cita modificada
- `accion`: Se determina automáticamente según el cambio:
  - 'A': Actualización general
  - 'C': Cancelación (cuando estado = 'C')
  - 'R': Reprogramación (cuando estado = 'R')
- `FAccion`: Fecha y hora actual (se registra automáticamente)

### 2. Consultar Historial Administrativo (GET)

**Endpoint:** `GET http://localhost:3008/appointments/admin-history`

**Descripción:** Permite a los administradores consultar el historial de gestiones administrativas de citas.

**Headers requeridos:**
```
Authorization: Bearer <token>
```

**Query Parameters (opcionales):**
- `idCita`: Filtrar por ID de cita específica
- `idPAdministrativo`: Filtrar por ID de personal administrativo específico

**Ejemplos de uso:**
```
GET /appointments/admin-history
GET /appointments/admin-history?idCita=5
GET /appointments/admin-history?idPAdministrativo=1
GET /appointments/admin-history?idCita=5&idPAdministrativo=1
```

**Respuesta:**
```json
[
  {
    "idPAdministrativo": 1,
    "idCita": 5,
    "accion": "A",
    "FAccion": "2025-01-15T09:30:00.000Z",
    "pAdministrativo": {
      "idPAdministrativo": 1,
      "idEmpleado": 1,
      "sueldo": "2000000",
      "empleado": {
        "idEmpleado": 1,
        "idUsuario": "52223645",
        "idDepartamento": 1,
        "FContratacion": "2025-01-01T00:00:00.000Z",
        "estado": "V"
      }
    },
    "cita": {
      "idCita": 5,
      "idPaciente": 1,
      "idMedico": 1,
      "fechaYHora": "2025-01-15T10:00:00.000Z",
      "estado": "R",
      "resumen": ""
    }
  }
]
```

## Estructura de la Base de Datos

### Tabla PAdmin_Gestiona_Cita

```sql
CREATE TABLE PAdmin_Gestiona_Cita (
    idPAdministrativo INT,
    idCita INT,
    accion VARCHAR(1) NOT NULL DEFAULT 'A',
    FAccion DATE NOT NULL DEFAULT CURRENT_DATE
);

ALTER TABLE PAdmin_Gestiona_Cita
    ADD CONSTRAINT pk_PAdmin_Gestiona_Cita PRIMARY KEY (idPAdministrativo, idCita),
    ADD CONSTRAINT fk_idPAdministrativo FOREIGN KEY (idPAdministrativo) REFERENCES PAdministrativo (idPAdministrativo),
    ADD CONSTRAINT fk_idCita FOREIGN KEY (idCita) REFERENCES Cita (idCita),
    ADD CONSTRAINT chk_accion CHECK (accion IN ('A', 'C', 'R'));
```

**Campos:**
- `idPAdministrativo`: ID del personal administrativo que realizó la gestión
- `idCita`: ID de la cita gestionada
- `accion`: Tipo de acción realizada ('A'=Actualizar, 'C'=Cancelar, 'R'=Reprogramar)
- `FAccion`: Fecha y hora en que se realizó la acción

## Flujo de Implementación

1. **Autenticación:** El administrador debe estar autenticado con rol 'ADMIN'
2. **Validación:** Se valida que el usuario sea un empleado administrativo
3. **Actualización:** Se actualiza la cita con los nuevos datos
4. **Registro:** Se registra automáticamente la gestión en `PAdmin_Gestiona_Cita`
5. **Respuesta:** Se devuelve la cita actualizada

## Validaciones

- Solo usuarios con rol 'ADMIN' pueden actualizar citas
- El usuario debe ser un empleado administrativo válido
- Los estados de cita deben ser válidos ('R', 'A', 'P', 'C')
- Las fechas deben estar en formato ISO
- Los horarios deben ser en franjas de 30 minutos exactos (HH:00 o HH:30)

## Ejemplo de Uso Completo

```bash
# 1. Actualizar una cita
curl -X PATCH http://localhost:3008/appointments/5 \
  -H "Authorization: Bearer <admin_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "estado": "C"
  }'

# 2. Consultar historial de la cita
curl -X GET "http://localhost:3008/appointments/admin-history?idCita=5" \
  -H "Authorization: Bearer <admin_token>"
```

## Notas Importantes

- El registro en `PAdmin_Gestiona_Cita` es automático y no puede ser evitado
- Si hay un error al registrar la gestión, se loguea pero no falla la actualización de la cita
- El historial se ordena por fecha de acción descendente (más reciente primero)
- Solo los administradores pueden consultar el historial administrativo 