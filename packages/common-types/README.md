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

## Notas sobre enums compartidos entre TypeScript y Prisma

En este monorepo, los enums como `UserRole` se definen tanto en TypeScript (en este paquete) como en el archivo de esquema de Prisma (`schema.prisma`).

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