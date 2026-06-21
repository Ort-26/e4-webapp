import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../app/router/AppRoutes";
import "../../../styles/landing.css";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing-page bg-dark text-light min-vh-100">
      <Navbar />

      <HeroSection
        onLogin={() => navigate(AppRoutes.AUTH.LOGIN)}
      />

      <FeaturesSection />

      <WorkflowSection />

      <RolesSection />

      <CallToActionSection
        onLogin={() => navigate(AppRoutes.AUTH.LOGIN)}
      />

      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-secondary-subtle bg-dark sticky-top">
      <div className="container py-2">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="/">
          <span className="brand-icon">E4</span>
          <span>E4-Support Desk</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#landingNavbar"
          aria-controls="landingNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="landingNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#features">Características</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workflow">Flujo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roles">Roles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roles">Roles</a>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary btn-sm px-3" to={AppRoutes.LANDING.ABOUT}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light btn-sm px-3" to={AppRoutes.AUTH.LOGIN}>
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

interface HeroSectionProps {
  onLogin: () => void;
}

function HeroSection({ onLogin }: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center g-5 py-lg-5">
          <div className="col-12 col-lg-6">
            <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2">
              Plataforma de incidencias
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Gestiona tickets de soporte con orden, trazabilidad y control.
            </h1>

            <p className="lead text-muted-custom mb-4">
              E4-Support Desk centraliza la creación, asignación, seguimiento y
              resolución de incidencias mediante roles, estados y reglas de negocio
              claramente definidas.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn btn-outline-light btn-lg px-4" onClick={onLogin}>
                Acceder al sistema
              </button>
            </div>

            <div className="row g-3 mt-5">
              <HeroMetric value="6" label="Estados de ticket" />
              <HeroMetric value="3" label="Roles principales" />
              <HeroMetric value="100%" label="Trazabilidad" />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="hero-card border-custom rounded-4 p-4 shadow-lg">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <p className="text-uppercase text-muted-custom small mb-1">
                    Ticket activo
                  </p>
                  <h2 className="h5 fw-bold mb-0">INC-2026-0048</h2>
                </div>

                <span className="badge bg-warning text-dark">
                  IN_PROGRESS
                </span>
              </div>

              <div className="mb-4">
                <h3 className="h6 fw-bold mb-2">
                  Error al acceder al panel de administración
                </h3>
                <p className="text-muted-custom mb-0">
                  El usuario reporta que no puede consultar el detalle de sus
                  incidencias después de iniciar sesión.
                </p>
              </div>

              <div className="timeline">
                <TimelineItem title="Ticket creado" description="Cliente reportó la incidencia." />
                <TimelineItem title="Ticket asignado" description="Un agente tomó el caso." />
                <TimelineItem title="En progreso" description="Se está validando la causa raíz." active />
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4 pt-4 border-top border-secondary-subtle">
                <div>
                  <p className="text-muted-custom small mb-1">Asignado a</p>
                  <p className="mb-0 fw-semibold">Agente de soporte</p>
                </div>

                <button className="btn btn-sm btn-outline-primary">
                  Ver detalle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface HeroMetricProps {
  value: string;
  label: string;
}

function HeroMetric({ value, label }: HeroMetricProps) {
  return (
    <div className="col-4">
      <div className="metric-card rounded-3 p-3 h-100">
        <p className="h4 fw-bold mb-1">{value}</p>
        <p className="text-muted-custom small mb-0">{label}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
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

  return (
    <section id="features" className="py-5">
      <div className="container">
        <SectionHeader
          eyebrow="Características"
          title="Una base sólida para operar soporte"
          description="E4-Support Desk está pensado para manejar incidencias de forma ordenada, segura y fácil de extender."
        />

        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-12 col-md-6 col-lg-4" key={feature.title}>
              <div className="feature-card border-custom rounded-4 p-4 h-100">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h3 className="h5 fw-bold">{feature.title}</h3>
                <p className="text-muted-custom mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const statuses = [
    "CREATED",
    "ASSIGNED",
    "IN_PROGRESS",
    "WAITING_FOR_CLIENT",
    "RESOLVED",
    "CLOSED",
  ];

  return (
    <section id="workflow" className="py-5 bg-black-custom">
      <div className="container">
        <SectionHeader
          eyebrow="Flujo de trabajo"
          title="Estados claros para cada etapa del soporte"
          description="El ciclo de vida del ticket permite saber exactamente en qué punto se encuentra cada incidencia."
        />

        <div className="workflow-wrapper border-custom rounded-4 p-4">
          <div className="row g-3 align-items-center">
            {statuses.map((status, index) => (
              <div className="col-12 col-md-6 col-xl" key={status}>
                <div className="workflow-step rounded-3 p-3 text-center h-100">
                  <span className="workflow-index">{index + 1}</span>
                  <p className="fw-bold small mb-0 mt-2">{status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-custom text-center mt-4 mb-0">
          Las transiciones pueden validarse por rol, permisos y relación del usuario
          con el ticket.
        </p>
      </div>
    </section>
  );
}

function RolesSection() {
  const roles = [
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

  return (
    <section id="roles" className="py-5">
      <div className="container">
        <SectionHeader
          eyebrow="Roles"
          title="Permisos diseñados para una operación controlada"
          description="Cada usuario interactúa con los tickets según su responsabilidad dentro del proceso."
        />

        <div className="row g-4">
          {roles.map((role) => (
            <div className="col-12 col-lg-4" key={role.role}>
              <div className="role-card border-custom rounded-4 p-4 h-100">
                <span className="badge text-bg-primary mb-3">{role.role}</span>
                <h3 className="h4 fw-bold">{role.title}</h3>
                <p className="text-muted-custom">{role.description}</p>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  {role.permissions.map((permission) => (
                    <span
                      className="badge rounded-pill bg-dark text-light border border-secondary px-3 py-2"
                      key={permission}
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CallToActionSectionProps {
  onLogin: () => void;
}

function CallToActionSection({ onLogin }: CallToActionSectionProps) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="cta-card border-custom rounded-4 p-5 text-center">
          <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2">
            E4-Support Desk
          </span>

          <h2 className="display-6 fw-bold mb-3">
            Comienza a gestionar incidencias con mayor control.
          </h2>

          <p className="text-muted-custom mb-4 mx-auto cta-description">
            Centraliza tickets, comentarios, asignaciones y cambios de estado en
            una plataforma preparada para crecer.
          </p>

          <button className="btn btn-primary btn-lg px-5" onClick={onLogin}>
            Entrar a la plataforma
          </button>
        </div>
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-5">
      <p className="text-primary text-uppercase fw-bold small mb-2">{eyebrow}</p>
      <h2 className="display-6 fw-bold mb-3">{title}</h2>
      <p className="text-muted-custom mx-auto section-description">
        {description}
      </p>
    </div>
  );
}

interface TimelineItemProps {
  title: string;
  description: string;
  active?: boolean;
}

function TimelineItem({ title, description, active = false }: TimelineItemProps) {
  return (
    <div className={`timeline-item ${active ? "active" : ""}`}>
      <div className="timeline-dot" />
      <div>
        <p className="fw-bold mb-1">{title}</p>
        <p className="text-muted-custom small mb-0">{description}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-top border-secondary-subtle py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <p className="mb-0 text-muted-custom">
          © 2026 E4-Support Desk. Plataforma de gestión de incidencias.
        </p>

        <p className="mb-0 text-muted-custom">
          Diseñado para soporte, trazabilidad y control operativo.
        </p>
      </div>
    </footer>
  );
}