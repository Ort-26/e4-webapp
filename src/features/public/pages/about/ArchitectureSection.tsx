import { ProjectImages } from "../../../../assets";
import DiagramArrow from "./components/DiagramArrow";
import DiagramBox from "./components/DiagramBox";
import DocSection from "./components/DocSection";
import { type AboutStackItem } from "./data";

interface ArchitectureSectionProps {
    stackItems: AboutStackItem[]
}

export default function ArchitectureSection({ stackItems }: ArchitectureSectionProps) {

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

