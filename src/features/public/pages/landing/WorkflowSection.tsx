import SectionHeader from "./SectionHeader";

interface WorkflowSectionProps {
  statuses: string[];
}

export default function WorkflowSection({ statuses }: WorkflowSectionProps) {
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
