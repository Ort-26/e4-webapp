export default function NoTicketsFound() {
  return (
    <div className="card border-0 shadow-sm  custom-container-bg">
        <div className="card-body text-center py-5">
            <i className="bi bi-inbox fs-1 text-white" />
            <h2 className="h5 mt-3">No hay tickets registrados</h2>
            <p className="text-muted mb-4">
            Cuando se creen tickets, aparecerán en esta sección.
            </p>
        </div>
    </div>
  )
}
