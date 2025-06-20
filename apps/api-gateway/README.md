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

# API Gateway

## Overview

The API Gateway is the single entry point for all client requests into the hospital management system's backend. It is responsible for routing incoming requests to the appropriate microservices, as well as providing a centralized layer for authentication and security.

This gateway acts as a reverse proxy, enhancing security by hiding the internal network topology and providing a unified interface for clients.

## Key Responsibilities

1.  **Request Routing**: Dynamically routes requests to internal microservices (`auth-service`, `patients-service`, etc.) based on the request path.
2.  **Centralized Authentication**: Validates JSON Web Tokens (JWT) for all protected routes, ensuring that only authenticated requests reach the internal services.
3.  **Security Filtering**: Acts as the first line of defense, rejecting unauthorized or invalid requests at the edge of the system.
4.  **Header Enrichment**: Injects user information (ID, email, roles) from the JWT payload into custom HTTP headers before forwarding the request, allowing internal services to be stateless and trust the gateway's authentication.
5.  **Unified API**: Presents a single, consistent API to client applications, abstracting the complexity of the underlying microservice architecture.

## How It Works

### 1. Request Flow

-   **Public Routes (`/auth/*`)**: Requests for public endpoints like login, signup, or password reset are immediately forwarded to the `auth-service` without JWT validation. This is handled by a `@Public()` decorator.
-   **Protected Routes (`*`)**: All other requests are intercepted by a global `JwtAuthGuard`.
    -   If the JWT in the `Authorization` header is **valid**, the gateway decodes its payload. It then forwards the request to the target microservice, adding `X-User-Id`, `X-User-Email`, and `X-User-Roles` headers.
    -   If the JWT is **invalid or missing**, the gateway immediately rejects the request with a `401 Unauthorized` error, and the request never reaches an internal service.

### 2. Authentication Strategy (`JwtStrategy`)

The gateway's `JwtStrategy` is lightweight. It only verifies the token's signature and expiration against the shared `JWT_SECRET`. It does **not** query the database, as it trusts that any token correctly signed by the `auth-service` is valid.

### 3. Service Discovery

The `ProxyService` contains the routing logic. It uses the request path to determine the destination microservice's URL from environment variables.

```typescript
// Example from proxy.service.ts
if (path.startsWith('/auth')) {
  return process.env.AUTH_SERVICE_URL;
}
if (path.startsWith('/patients')) {
  return process.env.PATIENTS_SERVICE_URL;
}
```

## Setup and Configuration

### 1. Environment Variables

Create a `.env` file in the `apps/api-gateway` directory. It must contain the URLs for all downstream services and the shared JWT secret.

```env
# Port for the API Gateway
PORT=3000

# The same secret used by the auth-service to sign tokens
JWT_SECRET="your-super-secret-and-long-jwt-key"

# URLs for internal microservices
AUTH_SERVICE_URL="http://localhost:3001"
# PATIENTS_SERVICE_URL="http://localhost:3002"
# APPOINTMENTS_SERVICE_URL="http://localhost:3003"
```

### 2. Installation

From the monorepo root, run:

```bash
# Install all workspace dependencies
npm install
```

### 3. Running the Gateway

You can run the gateway from the monorepo root or from its own directory.

**From Monorepo Root:**

```bash
npm run start:dev -- --workspace=api-gateway
```

**From Service Directory:**

```bash
cd apps/api-gateway
npm run start:dev
```

## Testing the Flow

1.  **Start all required services**, including the `auth-service` and the `api-gateway`.
2.  **Log in through the gateway** by sending a `POST` request to `http://localhost:3000/auth/login`. You will receive a JWT.
3.  **Access a protected route** (any route that isn't `/auth/*`) by including the JWT in the `Authorization` header.
    ```
    Authorization: Bearer <your-jwt-token>
    ```
4.  The gateway will validate the token, add the user headers, and forward the request.
5.  Try accessing a protected route without a token; you should receive a `401 Unauthorized` error directly from the gateway.
