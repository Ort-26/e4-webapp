import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PermissionRoute } from './PermissionRoute';
import { LoginPage } from '../../features/auth/pages/login/LoginPage';
import { Layout } from '../../shared/components/Layout';
import { PERMISSIONS } from '../../core/auth/permissions';
import { TicketListPage } from '../../features/tickets/pages/allTickets/TicketListPage';
import { AppRoutes } from './AppRoutes';
import { PublicRoute } from './PublicRoute';
import { TicketDetailPage } from '../../features/tickets/pages/TicketDetailPage';
import CreateTicketPage from '../../features/tickets/pages/CreateTicketPage';

export const AppRouter = () => {
  return (
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        {/* <Route path={AppRoutes.AUTH.LOGIN} element={<LoginPage />} /> */}
        {/* <Route path={AppRoutes.FORBIDDEN} element={<Forbidden />} /> */}
        {/* <Route path={AppRoutes.NOT_FOUND} element={<Forbidden />} /> */}
        <Route element={<PublicRoute />}>
          <Route path={AppRoutes.AUTH.LOGIN} element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path={AppRoutes.TICKETS.LIST} element={<TicketListPage />} />
            <Route path={AppRoutes.TICKETS.DETAIL} element={<TicketDetailPage />} />

            <Route
              element={
                <PermissionRoute permissions={[PERMISSIONS.TICKET_CREATE]} />
              }
            >
              <Route path={AppRoutes.TICKETS.CREATE} element={<CreateTicketPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
  );
};