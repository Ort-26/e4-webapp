export function getInitials(name: string, lastName: string) {
  const firstInitial = name?.charAt(0).toUpperCase() ?? "";
  const lastInitial = lastName?.charAt(0).toUpperCase() ?? "";
  return `${firstInitial}${lastInitial}`;
}
