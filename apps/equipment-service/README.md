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

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Equipment Service

Este microservicio gestiona la solicitud y el inventario de equipamiento médico para el sistema hospitalario.

## Endpoints

### 1. Listar Equipos (solo MEDIC)
- **GET /equipment**
- **Descripción:** Devuelve la lista de todos los equipos disponibles.
- **Auth:** Requiere token JWT de un usuario con rol MEDIC.
- **Respuesta:**
  ```json
  [
    {
      "idEquipamiento": 1,
      "idDepartamento": 1,
      "nombre": "Electrocardiógrafo",
      "estado": "D",
      "FContratacion": "2025-07-09T06:34:51.962Z"
    },
    ...
  ]
  ```

### 2. Solicitar Equipo (solo MEDIC)
- **POST /equipment/request**
- **Descripción:** Permite a un médico solicitar un equipo. El estado del equipo cambia de 'D' (disponible) a 'P' (prestado) y se crea un registro en la tabla Medico_Equipo.
- **Auth:** Requiere token JWT de un usuario con rol MEDIC.
- **Body:**
  ```json
  {
    "idEquipamiento": 1,
    "FPrestamo": "2025-07-15T09:00:00.000Z",
    "FDevolucion": "2025-07-15T09:05:00.000Z"
  }
  ```
- **Respuesta:**
  - Éxito: Registro del préstamo.
  - Forbidden: Solo los usuarios MEDIC pueden solicitar equipos.

### 3. Poblar Equipos por Defecto (Interno)
- **POST /equipment/internal/seed**
- **Descripción:** Llena la tabla de equipos con equipos por defecto. No está expuesto al API Gateway ni al frontend.
- **Auth:** Solo uso interno.

## Arquitectura
- **API Gateway** inyecta el ID de usuario en el body de la request para todos los endpoints protegidos.
- **Equipment Service** valida el rol del usuario (debe ser MEDIC) antes de permitir la solicitud de equipos.
- **Cardiology Service** gestiona los equipos y los registros de préstamo en la base de datos.

## Swagger/OpenAPI
- **Swagger UI** está disponible al ejecutar el servicio (ver main.ts para la ruta, usualmente `/api`).
- Todos los endpoints están documentados con tipos de request/response y requisitos de autenticación.

## Notas
- Solo los usuarios con rol MEDIC pueden listar o solicitar equipos.
- El servicio es robusto ante IDs de usuario faltantes o malformados.
- Los mensajes de error se propagan al cliente para facilitar la depuración.

---

Para más detalles, consulta el código y la documentación Swagger UI.
