interface CaseMetricProps {
  value: string;
  label: string;
}

export default function CaseMetric({ value, label }: CaseMetricProps) {
  return (
    <div className="col-12 col-md-4">
      <div className="doc-card border-custom rounded-4 p-4 h-100">
        <p className="h4 fw-bold mb-2">{value}</p>
        <p className="text-muted-custom mb-0">{label}</p>
      </div>
    </div>
  );
}