import DocSection from "./components/DocSection";

export default function AssumptionsSection() {
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