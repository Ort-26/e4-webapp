import { ProjectImages } from "../../../../assets";
import DocSection from "./components/DocSection";

export default function EntityRelationshipSection() {
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
      </div>
    </DocSection>
  );
}