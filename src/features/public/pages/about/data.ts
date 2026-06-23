export interface AboutSection {
  id: string;
  label: string;
}

export interface AboutStatuses {
  code: string;
  title: string;
  description: string;
}

export interface AboutStackItem {
  layer: string;
  technology: string;
  description: string;
}

export interface AboutPermission {
  permission: string;
  client: boolean;
  agent: boolean;
  admin: boolean;
  description: string;
}

const sections: AboutSection[] = [
    { id: "case-study", label: "Caso de estudio" },
    { id: "workflow", label: "Ciclo de trabajo" },
    { id: "assumptions", label: "Supuestos y limitaciones" },
    { id: "architecture", label: "Arquitectura" },
    { id: "permissions", label: "Matriz de permisos" },
    { id: "er-diagram", label: "Diagrama entidad-relación" },
];

const statuses: AboutStatuses[] = [
  {
    code: "CREATED",
    title: "Creado",
    description: "El cliente registra una nueva incidencia.",
  },
  {
    code: "ASSIGNED",
    title: "Asignado",
    description: "El ticket queda asociado a un agente responsable.",
  },
  {
    code: "IN_PROGRESS",
    title: "En progreso",
    description: "El agente trabaja activamente en la resolución.",
  },
  {
    code: "WAITING_FOR_CLIENT",
    title: "Esperando cliente",
    description: "El agente solicita información adicional.",
  },
  {
    code: "RESOLVED",
    title: "Resuelto",
    description: "El agente propone una resolución del caso.",
  },
  {
    code: "CLOSED",
    title: "Cerrado",
    description: "El caso se considera finalizado.",
  },
];

const stackItems: AboutStackItem[] = [
  {
    layer: "Frontend",
    technology: "React + TypeScript + Bootstrap",
    description: "Construcción de vistas, formularios, navegación y experiencia visual.",
  },
  {
    layer: "Backend",
    technology: "Node.js + Express + TypeScript",
    description: "Exposición de endpoints REST, middlewares, validaciones y lógica de negocio.",
  },
  {
    layer: "Base de datos",
    technology: "PostgreSQL",
    description: "Persistencia de usuarios, roles, permisos, tickets, estados y transiciones.",
  },
  {
    layer: "ORM",
    technology: "Sequelize",
    description: "Mapeo de modelos, relaciones y consultas hacia PostgreSQL.",
  },
  {
    layer: "Seguridad",
    technology: "JWT + RBAC",
    description: "Autenticación por token y autorización basada en permisos.",
  },
  {
    layer: "Despliegue",
    technology: "Docker",
    description: "Ejecución de servicios aislados mediante contenedores.",
  },
];

const permissions: AboutPermission[] = [
  {
    permission: "TICKET_CREATE",
    client: true,
    agent: false,
    admin: true,
    description: "Crear nuevos tickets.",
  },
  {
    permission: "TICKET_READ_ALL",
    client: false,
    agent: true,
    admin: true,
    description: "Consultar tickets más allá de los propios.",
  },
  {
    permission: "TICKET_ASSIGN",
    client: false,
    agent: true,
    admin: true,
    description: "Asignar o tomar tickets.",
  },
  {
    permission: "TICKET_IN_PROGRESS",
    client: true,
    agent: true,
    admin: true,
    description: "Mover tickets hacia estado en progreso.",
  },
  {
    permission: "TICKET_WAIT_CLIENT",
    client: false,
    agent: true,
    admin: true,
    description: "Solicitar información al cliente.",
  },
  {
    permission: "TICKET_RESOLVE",
    client: true,
    agent: true,
    admin: true,
    description: "Marcar un ticket como resuelto.",
  },
  {
    permission: "TICKET_CLOSE",
    client: false,
    agent: false,
    admin: true,
    description: "Cerrar definitivamente un ticket.",
  },
];

export const aboutData = {
  sections,
  statuses,
  stackItems,
  permissions,
};