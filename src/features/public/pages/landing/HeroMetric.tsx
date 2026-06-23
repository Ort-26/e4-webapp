interface HeroMetricProps {
  value: string;
  label: string;
}

export default function HeroMetric({ value, label }: HeroMetricProps) {
  return (
    <div className="col-4">
      <div className="metric-card rounded-3 p-3 h-100">
        <p className="h4 fw-bold mb-1">{value}</p>
        <p className="text-muted-custom small mb-0">{label}</p>
      </div>
    </div>
  );
}