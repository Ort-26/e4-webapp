interface CallToActionSectionProps {
  onLogin: () => void;
}


export default function CallToActionSection({ onLogin }: CallToActionSectionProps) {
  return (
    <section className="py-5">
      <div className="container">
        <div className="cta-card border-custom rounded-4 p-5 text-center">
          <span className="badge rounded-pill text-bg-primary mb-3 px-3 py-2">
            E4-Support Desk
          </span>

          <h2 className="display-6 fw-bold mb-3">
            Comienza a gestionar incidencias con mayor control.
          </h2>

          <p className="text-muted-custom mb-4 mx-auto cta-description">
            Centraliza tickets, comentarios, asignaciones y cambios de estado en
            una plataforma preparada para crecer.
          </p>

          <button className="btn btn-primary btn-lg px-5" onClick={onLogin}>
            Entrar a la plataforma
          </button>
        </div>
      </div>
    </section>
  );
}