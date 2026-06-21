import { BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { AppRouter } from './router/AppRouter';
import { AppPublicRoutes } from './router/AppRoutes';

const AppContent = () => {
  const location = useLocation();
  const isPublicRoute = AppPublicRoutes.includes(location.pathname);

  if (isPublicRoute) {
    return <AppRouter />;
  }

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};