interface DiagramBoxProps {
  title: string;
  description: string;
}

export default function DiagramBox({ title, description }: DiagramBoxProps) {
  return (
    <div className="diagram-box rounded-4 p-4">
      <h4 className="h6 fw-bold">{title}</h4>
      <p className="text-muted-custom small mb-0">{description}</p>
    </div>
  );
}
