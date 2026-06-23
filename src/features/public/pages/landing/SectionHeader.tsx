interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-5">
      <p className="text-primary text-uppercase fw-bold small mb-2">{eyebrow}</p>
      <h2 className="display-6 fw-bold mb-3">{title}</h2>
      <p className="text-muted-custom mx-auto section-description">
        {description}
      </p>
    </div>
  );
}