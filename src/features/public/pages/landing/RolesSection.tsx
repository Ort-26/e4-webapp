import type { LandingRole } from "./data";
import SectionHeader from "./SectionHeader";

interface RolesSectionProps {
  roles: LandingRole[]
}

export default function RolesSection({ roles }: RolesSectionProps) {
  return (
    <section id="roles" className="py-5">
      <div className="container">
        <SectionHeader
          eyebrow="Roles"
          title="Permisos diseñados para una operación controlada"
          description="Cada usuario interactúa con los tickets según su responsabilidad dentro del proceso."
        />

        <div className="row g-4">
          {roles.map((role) => (
            <div className="col-12 col-lg-4" key={role.role}>
              <div className="role-card border-custom rounded-4 p-4 h-100">
                <span className="badge text-bg-primary mb-3">{role.role}</span>
                <h3 className="h4 fw-bold">{role.title}</h3>
                <p className="text-muted-custom">{role.description}</p>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  {role.permissions.map((permission) => (
                    <span
                      className="badge rounded-pill bg-dark text-light border border-secondary px-3 py-2"
                      key={permission}
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}