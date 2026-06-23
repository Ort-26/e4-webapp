# e4-webapp-2

Frontend web del sistema de soporte de tickets E4. La aplicación está construida con React, TypeScript y Vite, y consume una API configurable para autenticación, gestión de tickets y catálogos.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Axios
- Bootstrap y Bootstrap Icons

## Funcionalidades

- Landing pública con información del proyecto y la arquitectura.
- Página de login para autenticación contra la API.
- Área privada para listar tickets, ver detalle y crear tickets.
- Rutas protegidas por sesión y por permisos.
- Interceptores de Axios para manejar el flujo de autenticación.

## Requisitos

- Node.js 20 o superior.
- npm 10 o superior.
- Una API compatible con el frontend y accesible desde la URL configurada.

## Instalación

1. Instala dependencias:

```bash
npm install
```

2. Configura las variables de entorno.

## Variables de entorno

La aplicación usa una sola variable pública para apuntar a la API:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

Puedes declararla en archivos como `.env` o `.env.production`.

## Scripts

- `npm run dev`: arranca el servidor de desarrollo.
- `npm run build`: valida TypeScript, construye la app y copia `.env` a `dist/.env`.
- `npm run lint`: ejecuta ESLint sobre el proyecto.
- `npm run preview`: previsualiza el build generado por Vite.

## Ejecución local

```bash
npm run dev
```

Luego abre la URL que muestra Vite en consola.

## Rutas principales

- `/`: landing pública.
- `/about`: información del proyecto.
- `/workflow`: documentación del flujo de trabajo.
- `/login`: inicio de sesión.
- `/backoffice/tickets`: listado de tickets.
- `/backoffice/tickets/:ticketId`: detalle de un ticket.
- `/backoffice/tickets/new`: creación de ticket, disponible solo con el permiso correspondiente.

## Permisos y acceso

El frontend protege rutas privadas con sesión activa y valida permisos para ciertas acciones. Los permisos y roles se definen en `src/core/auth/permissions.ts`.

## Estructura del proyecto

```text
src/
├── app/
├── config/
├── core/
├── features/
├── models/
├── shared/
├── styles/
└── main.tsx
```

## Build y despliegue

El build se genera con Vite. El script de producción copia `.env` dentro de `dist` para mantener la configuración disponible en el artefacto generado.

## Notas

- La navegación pública y privada está separada por rutas.
- El cliente HTTP se configura al iniciar la app, antes de renderizar React.
- Si cambias la URL de la API, reinicia el servidor de desarrollo.