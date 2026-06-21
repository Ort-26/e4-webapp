  import { Navigate, Outlet } from 'react-router-dom';
  import { useAuth } from '../../core/auth/useAuth';
  import { Loading } from '../../shared/components/Loading';

  export const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
      return <Loading />;
    }

    if (!isAuthenticated) {
      console.log('User is not authenticated, redirecting to login');
      return <Navigate to="/login" replace />;
    }

    return <Outlet />;
  };