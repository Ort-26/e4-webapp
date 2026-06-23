interface ValidationCardProps {
  title: string;
  description: string;
}

export default function ValidationCard({ title, description }: ValidationCardProps) {
  return (
    <div className="col-12 col-xl-4">
      <div className="validation-card rounded-4 p-4 h-100">
        <h4 className="h6 fw-bold">{title}</h4>
        <p className="text-muted-custom mb-0">{description}</p>
      </div>
    </div>
  );
}