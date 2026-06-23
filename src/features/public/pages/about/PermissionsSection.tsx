import DocSection from "./components/DocSection";
import renderPermission from "./components/RenderPermission";
import ValidationCard from "./components/ValidationCard";
import type { AboutPermission } from "./data";

interface PermissionsSectionProps {
  rows: AboutPermission[];
}

export default function PermissionsSection({rows}: PermissionsSectionProps) {
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