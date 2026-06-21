export default function InformationSection() {
  return (
    <section className="col-lg-6 d-none d-lg-flex flex-column justify-content-between p-5" style={{ background: "linear-gradient(135deg, #161925 0%, #0f111a 100%)" }}>
        <div>
        <span className="badge text-bg-primary px-3 py-2 mb-4 fw-semibold">
            E4-Technology
        </span>

        <h1 className="display-6 fw-bold mb-3 text-white">
            E4-Support Desk
        </h1>

        <p className="text-muted-custom fs-5 lh-base">
            Plataforma de gestion de tickets de incidencias
        </p>
        </div>

        <div className="border-top border-secondary pt-4">
        <div className="d-flex gap-3 mb-4">
            <div className="rounded-circle bg-primary" style={{ width: "12px", height: "12px", marginTop: "6px" }} />
            <div>
            <h6 className="mb-1 text-white fw-bold">RBAC integrado</h6>
            <p className="text-muted-custom small mb-0">
                Permisos por rol para crear, asignar, resolver y cerrar tickets.
            </p>
            </div>
        </div>

        <div className="d-flex gap-3">
            <div className="rounded-circle bg-success" style={{ width: "12px", height: "12px", marginTop: "6px" }} />
            <div>
            <h6 className="mb-1 text-white fw-bold">Sesiones seguras</h6>
            <p className="text-muted-custom small mb-0">
                Autenticación basada en cookies httpOnly.
            </p>
            </div>
        </div>
        </div>
    </section>
  )
}
