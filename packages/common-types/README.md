# Common Types Package

Este paquete contiene tipos y enums compartidos para todo el monorepo del Sistema de Gestión Hospitalaria (SGH).

## Propósito

Mantener la consistencia en la definición de tipos y enums a través de todos los microservicios del monorepo, evitando duplicación y asegurando que los cambios en las definiciones se reflejen en todos los servicios.

## Contenido

### Enums

- **UserRole**: Define los roles de usuario en el sistema
  - `PATIENT`: Paciente
  - `DOCTOR`: Médico
  - `ADMIN`: Administrador

## Uso

### En microservicios

```typescript
import { UserRole } from 'common-types';

// Usar el enum
const userRole = UserRole.DOCTOR;
```

### Configuración del workspace

Para que el paquete funcione correctamente en el monorepo:

1. **Instalar dependencias del workspace**:
   ```bash
   npm install
   ```

2. **Construir el paquete**:
   ```bash
   cd packages/common-types
   npm run build
   ```

3. **Usar en microservicios**:
   ```json
   {
     "dependencies": {
       "common-types": "workspace:*"
     }
   }
   ```

## Estructura

```
packages/common-types/
├── src/
│   ├── enums/
│   │   └── user-roles.enum.ts
│   └── index.ts
├── dist/           # Generado por TypeScript
├── package.json
├── tsconfig.json
└── README.md
```

## Desarrollo

### Agregar nuevos enums

1. Crear el archivo enum en `src/enums/`
2. Exportar desde `src/index.ts`
3. Actualizar esta documentación
4. Reconstruir el paquete

### Agregar nuevos tipos

1. Crear el archivo de tipos en `src/types/`
2. Exportar desde `src/index.ts`
3. Actualizar esta documentación
4. Reconstruir el paquete 