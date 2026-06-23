import CaseMetric from "./components/CaseMetric";
import DocSection from "./components/DocSection";

export default function CaseStudySection() {
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
