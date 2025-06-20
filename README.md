# Hospital SGH Monorepo

Este repositorio es un monorepo que contiene todos los microservicios y paquetes compartidos del sistema de gestión hospitalaria (SGH).

## Estructura del Monorepo

```
hospital-sgh-monorepo/
├── apps/
│   ├── api-gateway/         # API Gateway (entry point)
│   └── auth-service/        # Servicio de autenticación
├── packages/
│   ├── common-types/        # Tipos y enums compartidos
│   └── shared-utils/        # Utilidades compartidas
├── client/                  # (Opcional) Frontend
├── README.md                # Este archivo
└── ...
```

---

## Comandos Básicos

### 1. Instalar dependencias

Desde la raíz del monorepo:
```bash
npm install
```
Esto instalará todas las dependencias de todos los servicios y paquetes.

---

### 2. Crear un nuevo microservicio

Desde la raíz, usa el CLI de NestJS (debe estar instalado globalmente o como devDependency):
```bash
npx nest new apps/nombre-del-servicio
```
- Elige "npm" como gestor de paquetes.
- Elimina el `node_modules` y `package-lock.json` que se creen dentro del nuevo servicio.
- Asegúrate de que el nuevo servicio tenga su propio `tsconfig.json` y `nest-cli.json`.
- Registra el nuevo servicio en los scripts de tu monorepo si es necesario.

---

### 3. Agregar un nuevo paquete compartido

Desde la raíz:
```bash
mkdir -p packages/nombre-del-paquete/src
cd packages/nombre-del-paquete
npm init -y
```
- Crea un `tsconfig.json` y un `package.json` adecuado.
- Exporta tus utilidades o tipos desde `src/index.ts`.

---

### 4. Instalar/actualizar un paquete en un workspace

Para instalar una dependencia en un servicio específico:
```bash
npm install nombre-paquete --workspace=apps/auth-service
```

Para actualizar un paquete:
```bash
npm update nombre-paquete --workspace=apps/auth-service
```

Para instalar una dependencia en todos los workspaces:
```bash
npm install nombre-paquete -w
```

---

### 5. Compilar todos los servicios y paquetes

Desde la raíz:
```bash
npm run build
```

---

### 6. Iniciar los servicios en desarrollo (ambos a la vez)

Desde la raíz:
```bash
npm run start:dev
```
Esto usa `concurrently` para levantar el gateway y el auth-service en paralelo.

Para iniciar un solo servicio:
```bash
npm run start:dev -- --workspace=api-gateway
npm run start:dev -- --workspace=auth-service
```

---

### 7. Ejecutar migraciones y generar Prisma Client

Desde la carpeta del servicio correspondiente (ejemplo: auth-service):
```bash
cd apps/auth-service
npx prisma migrate dev
npx prisma generate
```

---

### 8. Solución de problemas comunes

- **No se reconocen rutas públicas en el gateway:**
  - Usa un solo decorador `@Post([...])` con un array de rutas públicas.
- **Cambios en paquetes compartidos no se reflejan:**
  - Ejecuta `npm run build` en la raíz para recompilar los paquetes.
- **Error de dependencias en un servicio:**
  - Asegúrate de instalar dependencias usando la opción `--workspace`.
- **El gateway no reenvía correctamente:**
  - Verifica que los controladores y servicios estén correctamente registrados en los módulos.

---

## Notas adicionales

- Usa siempre la raíz del monorepo para instalar dependencias y correr scripts globales.
- Los tokens y contraseñas iniciales se imprimen en consola en desarrollo para simular el envío seguro.
- Consulta los README específicos de cada servicio para detalles de endpoints y configuración avanzada.

---

¡Feliz desarrollo con SGH Monorepo!