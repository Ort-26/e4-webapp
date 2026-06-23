
interface EntityBoxProps {
  title: string;
  fields: string[];
}

export default function EntityBox({ title, fields }: EntityBoxProps) {
  return (
    <div className="entity-box rounded-4">
      <div className="entity-title">{title}</div>

      <ul className="entity-fields">
        {fields.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ul>
    </div>
  );
}