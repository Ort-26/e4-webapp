import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../core/auth/useAuth';
import { Loading } from '../../shared/components/Loading';
import { AppRoutes } from './AppRoutes';

export const PublicRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading message="Validando sesión..." />;
  }

  if (isAuthenticated) {
    return <Navigate to={AppRoutes.TICKETS.LIST} replace />;
  }

  return <Outlet />;
};