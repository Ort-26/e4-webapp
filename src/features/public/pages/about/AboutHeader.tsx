export default function AboutHeader() {
  return (
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
  )
}
