import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { PermissionRoute } from './PermissionRoute';

import { LoginPage } from '../../features/auth/pages/LoginPage';
import { TicketListPage } from '../../features/tickets/pages/TicketListPage';
import { TicketDetailPage } from '../../features/tickets/pages/TicketDetailPage';
import { CreateTicketPage } from '../../features/tickets/pages/CreateTicketPage';
import { Layout } from '../../shared/components/Layout';
import { Forbidden } from '../../shared/components/Forbidden';
import { Permissions } from '../../core/auth/permissions';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forbidden" element={<Forbidden />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<TicketListPage />} />
            <Route path="/tickets" element={<TicketListPage />} />
            <Route path="/tickets/:ticketId" element={<TicketDetailPage />} />

            <Route
              element={
                <PermissionRoute permissions={[Permissions.TicketCreate]} />
              }
            >
              <Route path="/tickets/new" element={<CreateTicketPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};