export default function renderPermission(enabled: boolean) {
  if (enabled) {
    return <span className="permission-yes">Permitido</span>;
  }

  return <span className="permission-no">No permitido</span>;
}