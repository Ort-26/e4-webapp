import { ProjectImages } from "../../../assets";
import "../../../styles/about.css";

export function AboutPage() {
  const sections = [
    { id: "case-study", label: "Caso de estudio" },
    { id: "workflow", label: "Ciclo de trabajo" },
    { id: "assumptions", label: "Supuestos y limitaciones" },
    { id: "architecture", label: "Arquitectura" },
    { id: "permissions", label: "Matriz de permisos" },
    { id: "er-diagram", label: "Diagrama entidad-relación" },
  ];

  return (
    <main className="about-page bg-dark text-light min-vh-100">
      <div className="container-fluid">
        <div className="row">
          <aside className="col-12 col-lg-3 col-xl-2 about-sidebar border-end border-secondary-subtle">
            <div className="sidebar-content">
              <a href="/" className="text-decoration-none">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <span className="brand-icon">E4</span>
                  <div>
                    <p className="fw-bold text-light mb-0">E4-Support Desk</p>
                    <p className="text-muted-custom small mb-0">Documentación técnica</p>
                  </div>
                </div>
              </a>

              <nav className="nav flex-column gap-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    className="nav-link about-nav-link"
                    href={`#${section.id}`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <section className="col-12 col-lg-9 col-xl-10 about-content">
            <div className="about-content-wrapper">
              <header className="mb-5">
                <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2">
                  Plataforma de incidencias
                </span>

                <h1 className="display-5 fw-bold mb-3">
                  About E4-Support Desk
                </h1>

                <p className="lead text-muted-custom mb-0 about-intro">
                  E4-Support Desk es una plataforma de gestión de incidencias
                  diseñada para demostrar un flujo completo de soporte: creación
                  de tickets, asignación, seguimiento, cambio de estados,
                  comentarios y control de permisos basado en roles.
                </p>
              </header>

              <CaseStudySection />
              <WorkflowSection />
              <AssumptionsSection />
              <ArchitectureSection />
              <PermissionsSection />
              <EntityRelationshipSection />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function CaseStudySection() {
  return (
    <DocSection
      id="case-study"
      eyebrow="Caso de estudio"
      title="Gestión controlada de incidencias de soporte"
    >
      <div className="row g-4">
        <div className="col-12 col-xl-7">
          <div className="doc-card border-custom rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold mb-3">Contexto funcional</h3>

            <p className="text-muted-custom">
              El sistema representa un escenario típico de mesa de ayuda donde
              un cliente reporta una incidencia, un agente la atiende y un
              administrador conserva visibilidad completa del proceso operativo.
            </p>

            <p className="text-muted-custom mb-0">
              La plataforma prioriza trazabilidad, seguridad lógica y separación
              de responsabilidades. Cada acción relevante debe estar respaldada
              por una regla de negocio: quién puede ejecutar la acción, sobre qué
              ticket y bajo qué estado.
            </p>
          </div>
        </div>

        <div className="col-12 col-xl-5">
          <div className="doc-card border-custom rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold mb-3">Objetivos del proyecto</h3>

            <ul className="text-muted-custom mb-0">
              <li>Registrar incidencias mediante tickets.</li>
              <li>Asignar tickets a agentes responsables.</li>
              <li>Controlar el avance mediante estados válidos.</li>
              <li>Validar permisos por rol y relación con el ticket.</li>
              <li>Documentar interacciones mediante comentarios.</li>
              <li>Exponer una base técnica clara para escalar el sistema.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-1">
        <CaseMetric value="CLIENT" label="Solicita atención y da seguimiento." />
        <CaseMetric value="AGENT" label="Atiende tickets asignados." />
        <CaseMetric value="ADMIN" label="Gestiona operación y visibilidad global." />
      </div>
    </DocSection>
  );
}

function WorkflowSection() {
  const statuses = [
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

  return (
    <DocSection
      id="workflow"
      eyebrow="Ciclo de trabajo"
      title="Flujo de estados del ticket"
    >
        <div className="d-flex w-100 justify-content-center pb-5">
            <img 
                src={ProjectImages.WORKFLOW_LIFE.image}
                alt={ProjectImages.WORKFLOW_LIFE.alt}
                className="img-fluid rounded-2 mt-4"
            />
        </div>
      <div className="doc-card border-custom rounded-4 p-4">
        <div className="row g-3">
          {statuses.map((status, index) => (
            <div className="col-12 col-md-6 col-xl-4" key={status.code}>
              <div className="workflow-card rounded-4 p-4 h-100">
                <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                  <span className="workflow-index">{index + 1}</span>
                  <span className="badge bg-dark text-light border border-secondary">
                    {status.code}
                  </span>
                </div>

                <h3 className="h5 fw-bold">{status.title}</h3>
                <p className="text-muted-custom mb-0">{status.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="workflow-flow mt-4">
          <span>CREATED</span>
          <span>→</span>
          <span>ASSIGNED</span>
          <span>→</span>
          <span>IN_PROGRESS</span>
          <span>→</span>
          <span>WAITING_FOR_CLIENT</span>
          <span>→</span>
          <span>RESOLVED</span>
          <span>→</span>
          <span>CLOSED</span>
        </div>
      </div>

      <div className="doc-card border-custom rounded-4 p-4 mt-4">
        <h3 className="h5 fw-bold mb-3">Reglas relevantes del ciclo</h3>

        <ul className="text-muted-custom mb-0">
          <li>Un cliente puede crear tickets y consultar sus propios tickets.</li>
          <li>Un agente puede interactuar con tickets asignados a él.</li>
          <li>Un administrador puede consultar y gestionar todos los tickets.</li>
          <li>Un ticket resuelto puede regresar a progreso si el cliente no acepta la solución.</li>
          <li>Las transiciones se validan por estado actual, estado destino y permisos del usuario.</li>
        </ul>
      </div>
    </DocSection>
  );
}

function AssumptionsSection() {
  return (
    <DocSection
      id="assumptions"
      eyebrow="Supuestos y limitaciones"
      title="Alcance técnico del MVP"
    >
      <div className="row g-4">
        <div className="col-12 col-xl-6">
          <div className="doc-card border-custom rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold mb-3">Supuestos</h3>

            <ul className="text-muted-custom mb-0">
              <li>El sistema cuenta con tres roles principales: CLIENT, AGENT y ADMIN.</li>
              <li>Los usuarios se autentican antes de interactuar con tickets.</li>
              <li>El backend extrae el usuario autenticado desde el token de acceso.</li>
              <li>Los permisos no se envían desde el frontend; se consultan en backend.</li>
              <li>Las reglas de transición viven en base de datos para facilitar mantenimiento.</li>
              <li>Los comentarios forman parte del historial funcional del ticket.</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-xl-6">
          <div className="doc-card border-custom rounded-4 p-4 h-100">
            <h3 className="h5 fw-bold mb-3">Limitaciones del MVP</h3>

            <ul className="text-muted-custom mb-0">
              <li>No contempla SLA avanzado por prioridad o calendario laboral.</li>
              <li>No incluye notificaciones en tiempo real.</li>
              <li>No incluye adjuntos en tickets o comentarios.</li>
              <li>No contempla multi-tenant empresarial.</li>
              <li>No incluye auditoría forense completa, solo trazabilidad funcional.</li>
              <li>No reemplaza una herramienta ITSM completa como ServiceNow o Jira Service Management.</li>
            </ul>
          </div>
        </div>
      </div>
    </DocSection>
  );
}

function ArchitectureSection() {
  const stackItems = [
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

  return (
    <>
    <DocSection
      id="architecture"
      eyebrow="Arquitectura"
      title="Diagrama de arquitectura"
    >
        <div className="d-flex">
            <img 
                src={ProjectImages.ARCH_DIAGRAM.image}
                alt={ProjectImages.ARCH_DIAGRAM.alt}
                className="img-fluid rounded-2 mb-4"
            />
        </div>
    </DocSection>
    <DocSection
      id="stack"
      eyebrow="Arquitectura"
      title="Stack técnico y separación de responsabilidades"
    >

      <div className="row g-4">
        {stackItems.map((item) => (
          <div className="col-12 col-md-6 col-xl-4" key={item.layer}>
            <div className="doc-card border-custom rounded-4 p-4 h-100">
              <span className="badge text-bg-primary mb-3">{item.layer}</span>
              <h3 className="h5 fw-bold">{item.technology}</h3>
              <p className="text-muted-custom mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="doc-card border-custom rounded-4 p-4 mt-4">
        <h3 className="h5 fw-bold mb-4">Vista lógica</h3>

        <div className="architecture-diagram">
          <DiagramBox title="React Web App" description="Landing, login, tickets, detalle y formularios." />
          <DiagramArrow />
          <DiagramBox title="Express API" description="Controladores, middlewares, casos de uso y repositorios." />
          <DiagramArrow />
          <DiagramBox title="PostgreSQL" description="Catálogos, relaciones, tickets, comentarios y transiciones." />
        </div>
      </div>

      <div className="doc-card border-custom rounded-4 p-4 mt-4">
        <h3 className="h5 fw-bold mb-3">Proceso técnico de una transición</h3>

        <ol className="text-muted-custom mb-0">
          <li>El usuario autenticado solicita cambiar el estado de un ticket.</li>
          <li>El backend obtiene el perfil autenticado desde el token.</li>
          <li>Se consulta el ticket y se valida que exista.</li>
          <li>Se obtienen los permisos asociados al rol del usuario.</li>
          <li>Se valida si el usuario puede interactuar con ese ticket específico.</li>
          <li>Se consulta si existe una transición permitida desde el estado actual hacia el estado destino.</li>
          <li>Si todo es válido, se actualiza el estado y se registra la interacción.</li>
        </ol>
      </div>
    </DocSection>
    </>
  );
}

function PermissionsSection() {
  const rows = [
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

  return (
    <DocSection
      id="permissions"
      eyebrow="Matriz de permisos"
      title="Autorización basada en roles"
    >
      <div className="doc-card border-custom rounded-4 p-4">
        <p className="text-muted-custom">
          La autorización no depende únicamente del rol. El sistema puede aplicar
          una segunda validación para verificar si el usuario autenticado es dueño
          del ticket, agente asignado o administrador con visibilidad global.
        </p>

        <div className="table-responsive mt-4">
          <table className="table table-dark table-hover align-middle permission-table">
            <thead>
              <tr>
                <th>Permiso</th>
                <th>CLIENT</th>
                <th>AGENT</th>
                <th>ADMIN</th>
                <th>Descripción</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.permission}>
                  <td>
                    <code>{row.permission}</code>
                  </td>
                  <td>{renderPermission(row.client)}</td>
                  <td>{renderPermission(row.agent)}</td>
                  <td>{renderPermission(row.admin)}</td>
                  <td className="text-muted-custom">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="doc-card border-custom rounded-4 p-4 mt-4">
        <h3 className="h5 fw-bold mb-3">Validaciones recomendadas</h3>

        <div className="row g-3">
          <ValidationCard
            title="Validación de permiso"
            description="Confirma que el rol del usuario tenga el permiso requerido para la acción."
          />

          <ValidationCard
            title="Validación de pertenencia"
            description="Confirma que el usuario pueda interactuar con ese ticket específico."
          />

          <ValidationCard
            title="Validación de transición"
            description="Confirma que el cambio de estado exista en la matriz de transiciones."
          />
        </div>
      </div>
    </DocSection>
  );
}

function EntityRelationshipSection() {
  return (
    <DocSection
      id="er-diagram"
      eyebrow="Diagrama entidad-relación"
      title="Modelo de datos principal"
    >
      <div className="doc-card border-custom rounded-4 p-4">
        <p className="text-muted-custom">
          El modelo separa catálogos, relaciones de autorización y entidades
          operativas. Esto permite mantener roles, permisos, estados y
          transiciones como datos configurables.
        </p>
        <img 
        className="img-fluid rounded-2 mt-4"
            src={ProjectImages.ENTITY_RELATION.image}
            alt={ProjectImages.ENTITY_RELATION.alt}
        />
        <div className="er-diagram mt-4">
          <EntityBox
            title="mas_users"
            fields={[
              "user_id PK",
              "user_name",
              "user_lastname",
              "email",
              "role_id FK",
            ]}
          />

          <EntityBox
            title="cat_roles"
            fields={[
              "role_id PK",
              "role_name",
              "role_desc",
            ]}
          />

          <EntityBox
            title="cat_permissions"
            fields={[
              "permission_id PK",
              "permission_name",
              "permission_desc",
            ]}
          />

          <EntityBox
            title="ctl_roles_permissions"
            fields={[
              "role_id FK",
              "permission_id FK",
            ]}
          />

          <EntityBox
            title="mas_tickets"
            fields={[
              "ticket_id PK",
              "title",
              "description",
              "status_id FK",
              "client_id FK",
              "agent_id FK",
            ]}
          />

          <EntityBox
            title="cat_ticket_statuses"
            fields={[
              "status_id PK",
              "status_code",
              "status_name",
              "status_desc",
            ]}
          />

          <EntityBox
            title="ctl_ticket_status_transitions"
            fields={[
              "transition_id PK",
              "from_status FK",
              "to_status FK",
              "role_id FK",
            ]}
          />

          <EntityBox
            title="mas_ticket_comments"
            fields={[
              "comment_id PK",
              "ticket_id FK",
              "user_id FK",
              "comment",
              "created_at",
            ]}
          />
        </div>
      </div>

      <div className="doc-card border-custom rounded-4 p-4 mt-4">
        <h3 className="h5 fw-bold mb-3">Relaciones clave</h3>

        <ul className="text-muted-custom mb-0">
          <li>
            <code>mas_users.role_id</code> referencia a <code>cat_roles.role_id</code>.
          </li>
          <li>
            <code>ctl_roles_permissions</code> relaciona roles con permisos.
          </li>
          <li>
            <code>mas_tickets.status_id</code> referencia el estado actual del ticket.
          </li>
          <li>
            <code>mas_tickets.client_id</code> representa al usuario que creó la incidencia.
          </li>
          <li>
            <code>mas_tickets.agent_id</code> representa al agente responsable.
          </li>
          <li>
            <code>ctl_ticket_status_transitions</code> define los cambios válidos por rol.
          </li>
          <li>
            <code>mas_ticket_comments</code> guarda las interacciones del ticket.
          </li>
        </ul>
      </div>
    </DocSection>
  );
}

interface DocSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

function DocSection({ id, eyebrow, title, children }: DocSectionProps) {
  return (
    <section id={id} className="doc-section">
      <div className="mb-4">
        <p className="text-primary text-uppercase fw-bold small mb-2">
          {eyebrow}
        </p>
        <h2 className="display-6 fw-bold mb-0">{title}</h2>
      </div>

      {children}
    </section>
  );
}

interface CaseMetricProps {
  value: string;
  label: string;
}

function CaseMetric({ value, label }: CaseMetricProps) {
  return (
    <div className="col-12 col-md-4">
      <div className="doc-card border-custom rounded-4 p-4 h-100">
        <p className="h4 fw-bold mb-2">{value}</p>
        <p className="text-muted-custom mb-0">{label}</p>
      </div>
    </div>
  );
}

function renderPermission(enabled: boolean) {
  if (enabled) {
    return <span className="permission-yes">Permitido</span>;
  }

  return <span className="permission-no">No permitido</span>;
}

interface ValidationCardProps {
  title: string;
  description: string;
}

function ValidationCard({ title, description }: ValidationCardProps) {
  return (
    <div className="col-12 col-xl-4">
      <div className="validation-card rounded-4 p-4 h-100">
        <h4 className="h6 fw-bold">{title}</h4>
        <p className="text-muted-custom mb-0">{description}</p>
      </div>
    </div>
  );
}

interface DiagramBoxProps {
  title: string;
  description: string;
}

function DiagramBox({ title, description }: DiagramBoxProps) {
  return (
    <div className="diagram-box rounded-4 p-4">
      <h4 className="h6 fw-bold">{title}</h4>
      <p className="text-muted-custom small mb-0">{description}</p>
    </div>
  );
}

function DiagramArrow() {
  return <div className="diagram-arrow">→</div>;
}

interface EntityBoxProps {
  title: string;
  fields: string[];
}

function EntityBox({ title, fields }: EntityBoxProps) {
  return (
    <div className="entity-box rounded-4">
      <div className="entity-title">{title}</div>

      <ul className="entity-fields">
        {fields.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ul>
    </div>
  );
}