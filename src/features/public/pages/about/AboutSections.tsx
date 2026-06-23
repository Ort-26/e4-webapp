import type { AboutSection } from "./data";

interface AboutSectionProps {
    sections: AboutSection[];
}

export default function AboutSections({ sections }: AboutSectionProps) {
  return ( 
        <aside className="col-12 col-lg-3 col-xl-2 about-sidebar border-end border-secondary-subtle">
            <div className="sidebar-content">
                <a href="/" className="text-decoration-none">
                <div className="d-flex align-items-center gap-2 mb-4">
                    <span className="brand-icon">E4</span>
                    <div>
                    <p className="fw-bold text-light mb-0">E4-Support Desk</p>
                    <p className="text-muted-custom small mb-0">Documentación técnica</p>
                    </div>
                </div>
                </a>

                <nav className="nav flex-column gap-1">
                {sections.map((section) => (
                    <a
                    key={section.id}
                    className="nav-link about-nav-link"
                    href={`#${section.id}`}
                    >
                    {section.label}
                    </a>
                ))}
                </nav>
            </div>
        </aside>
  )
}

