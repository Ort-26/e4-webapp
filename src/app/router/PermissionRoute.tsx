import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../core/auth/useAuth';

interface Props {
  permissions: string[];
}

export const PermissionRoute = ({ permissions }: Props) => {
  const { hasAnyPermission } = useAuth();

  if (!hasAnyPermission(permissions)) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
};