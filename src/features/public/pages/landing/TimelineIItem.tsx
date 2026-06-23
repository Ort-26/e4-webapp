interface TimelineItemProps {
  title: string;
  description: string;
  active?: boolean;
}

export default function TimelineItem({ title, description, active = false }: TimelineItemProps) {
  return (
    <div className={`timeline-item ${active ? "active" : ""}`}>
      <div className="timeline-dot" />
      <div>
        <p className="fw-bold mb-1">{title}</p>
        <p className="text-muted-custom small mb-0">{description}</p>
      </div>
    </div>
  );
}