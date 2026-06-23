import HeroMetric from "./HeroMetric";
import TimelineItem from "./TimelineIItem";

interface HeroSectionProps {
  onLogin: () => void;
}

export default function HeroSection({ onLogin }: HeroSectionProps) {
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