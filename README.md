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
npx nest new apps/nombre-servicio --skip-git
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

## Endpoints principales (AuthService)

### Crear usuario MEDIC o ADMIN (solo ROOT)

`POST /auth/root/create-user/:role`

- **Descripción:** Crea un usuario con rol MEDIC o ADMIN. Valida que el idDepartamento exista en department-service y que el sueldo sea positivo. Si el departamento no existe, retorna un error. Si la especialización falla, hace rollback.
- **Body ejemplo:**
  ```json
  {
    "idUsuario": 123456789,
    "nombre": "Dr. House",
    "email": "house@mail.com",
    "password": "password123",
    "genero": "M",
    "direccion": "Calle 123",
    "fechaNacimiento": "1970-01-01",
    "sueldo": 5000000,
    "idDepartamento": 1
  }
  ```
- **Response ejemplo:**
  ```json
  {
    "idUsuario": "123456789",
    "nombre": "Dr. House",
    "email": "house@mail.com",
    "departamento": "Cardiologia"
  }
  ```
- **Errores comunes:**
  - `400`: "El campo idDepartamento es obligatorio para crear un usuario MEDIC o ADMIN."
  - `400`: "Este departamento no existe"
  - `400`: "El campo sueldo es obligatorio y debe ser un número positivo para MEDIC o ADMIN."

### Crear paciente por ADMIN

`POST /auth/admin/create-patient`

- **Descripción:** Permite a un usuario ADMIN crear un paciente. El idPAdministrativo y el nombre del departamento se obtienen automáticamente del token y de los microservicios. Si la especialización falla, hace rollback.
- **Body ejemplo:**
  ```json
  {
    "email": "patient@mail.com",
    "password": "password123",
    "nombre": "Juan",
    "direccion": "Calle 123",
    "genero": "M",
    "fechaNacimiento": "1990-01-01",
    "idUsuario": 1234567890
  }
  ```
- **Response ejemplo:**
  ```json
  {
    "idUsuario": "1234567890",
    "nombre": "Juan",
    "email": "patient@mail.com",
    "baseDepartamento": "Cardiologia"
  }
  ```
- **Errores comunes:**
  - `400`: "No se encontró el idUsuario en el token"
  - `400`: "El admin no tiene empleado o departamento asignado"
  - `400`: "El usuario ya es paciente."
  - `400`: "No se pudo obtener el nombre del departamento"

---

¡Feliz desarrollo con SGH Monorepo!
