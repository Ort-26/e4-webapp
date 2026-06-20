## Scaffolding
``` 
src/
├── app/
│   ├── App.tsx
│   ├── router/
│   │   ├── AppRouter.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── PermissionRoute.tsx
│   └── providers/
│       └── AuthProvider.tsx
│
├── config/
│   └── env.ts
│
├── core/
│   ├── auth/
│   │   ├── auth-context.ts
│   │   ├── auth.types.ts
│   │   ├── permissions.ts
│   │   └── useAuth.ts
│   │
│   ├── http/
│   │   ├── axios-client.ts
│   │   └── axios-interceptors.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── tickets.service.ts
│   │   ├── users.service.ts
│   │   ├── catalogs.service.ts
│   │   └── index.ts
│   │
│   ├── models/
│   │   ├── auth.models.ts
│   │   ├── ticket.models.ts
│   │   ├── user.models.ts
│   │   ├── catalog.models.ts
│   │   └── api-response.models.ts
│   │
│   └── errors/
│       └── api-error.ts
│
├── features/
│   ├── auth/
│   │   └── pages/
│   │       └── LoginPage.tsx
│   │
│   ├── tickets/
│   │   ├── pages/
│   │   │   ├── TicketListPage.tsx
│   │   │   ├── TicketDetailPage.tsx
│   │   │   └── CreateTicketPage.tsx
│   │   ├── components/
│   │   │   ├── TicketCard.tsx
│   │   │   ├── TicketStatusBadge.tsx
│   │   │   └── TicketTransitionActions.tsx
│   │   └── hooks/
│   │       └── useTickets.ts
│   │
│   └── users/
│       └── pages/
│           └── UserListPage.tsx
│
├── shared/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Loading.tsx
│   │   └── Forbidden.tsx
│   └── utils/
│
└── main.tsx
```