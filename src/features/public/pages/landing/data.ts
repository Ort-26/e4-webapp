export interface LandingFeature {
  title: string;
  description: string;
  icon: string;
}

const features: LandingFeature[] = [
  {
    title: "Creación de incidencias",
    description:
      "Los clientes pueden registrar tickets con información clara para iniciar el proceso de atención.",
    icon: "＋",
  },
  {
    title: "Asignación controlada",
    description:
      "Los agentes y administradores pueden tomar o asignar tickets según permisos y reglas.",
    icon: "◎",
  },
  {
    title: "Flujo por estados",
    description:
      "Cada ticket avanza mediante transiciones válidas: creado, asignado, en progreso, espera, resuelto y cerrado.",
    icon: "↗",
  },
  {
    title: "Control por roles",
    description:
      "CLIENT, AGENT y ADMIN cuentan con permisos específicos para interactuar con cada incidencia.",
    icon: "◆",
  },
  {
    title: "Seguimiento de comentarios",
    description:
      "La conversación del ticket queda centralizada para mantener contexto y trazabilidad.",
    icon: "✦",
  },
  {
    title: "Visibilidad operativa",
    description:
      "Consulta tickets por estado, responsable o prioridad para facilitar la atención diaria.",
    icon: "◈",
  },
];

const statuses: string[] = [
  "CREATED",
  "ASSIGNED",
  "IN_PROGRESS",
  "WAITING_FOR_CLIENT",
  "RESOLVED",
  "CLOSED",
];

export interface LandingRole {
  role: string;
  title: string;
  description: string;
  permissions: string[];
}

  const roles: LandingRole[] = [
  {
    role: "CLIENT",
    title: "Cliente",
    description:
      "Puede crear tickets, dar seguimiento a sus incidencias y responder cuando se requiere información.",
    permissions: ["Crear ticket", "Comentar", "Retomar atención", "Validar resolución"],
  },
  {
    role: "AGENT",
    title: "Agente",
    description:
      "Atiende tickets asignados, actualiza estados y documenta el avance de la resolución.",
    permissions: ["Tomar ticket", "Cambiar estado", "Solicitar información", "Resolver"],
  },
  {
    role: "ADMIN",
    title: "Administrador",
    description:
      "Tiene visibilidad amplia del sistema y puede gestionar asignaciones, estados y operación.",
    permissions: ["Ver todos", "Asignar", "Cerrar", "Administrar flujo"],
  },
];

export const landingData = {
  features,
  statuses,
  roles,
};