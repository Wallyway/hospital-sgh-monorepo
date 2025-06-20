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

-   **Public Routes (`/auth/*`)**: Requests for public endpoints like login, forgot-password, reset-password, or bootstrap-admin are immediately forwarded to the `auth-service` without JWT validation. In the code, these are handled by a single controller method using a multi-route `@Post([...])` decorator. **Nota:** Si usas varios decoradores `@Post()` en un solo método, solo el último será efectivo; usa un array para agrupar rutas públicas.
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

## Development Notes

- In development, password reset tokens and initial passwords are printed to the console for simulation purposes. There is no real email delivery in this environment.
