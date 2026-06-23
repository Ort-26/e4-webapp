interface DocSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export default function DocSection({ id, eyebrow, title, children }: DocSectionProps) {
  return (
    <section id={id} className="doc-section">
      <div className="mb-4">
        <p className="text-primary text-uppercase fw-bold small mb-2">
          {eyebrow}
        </p>
        <h2 className="display-6 fw-bold mb-0">{title}</h2>
      </div>

      {children}
    </section>
  );
}
