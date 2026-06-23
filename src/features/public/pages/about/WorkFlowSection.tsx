import { ProjectImages } from "../../../../assets";
import DocSection from "./components/DocSection";
import type { AboutStatuses } from "./data";

interface WorkflowSectionProps {
    statuses: AboutStatuses[];
}

export default function WorkflowSection({ statuses }: WorkflowSectionProps) {
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