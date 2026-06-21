import { Link } from 'react-router-dom';
import { useAuth } from '../../core/auth/useAuth';
import { PERMISSIONS, ROLES } from '../../core/auth/permissions';
import { AppRoutes } from '../../app/router/AppRoutes';

export const Navbar = () => {
  const { user, logout, hasPermission } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to={AppRoutes.TICKETS.LIST}>
          Support Tickets
        </Link>

        <div className="d-flex align-items-center gap-3">
          {hasPermission(PERMISSIONS.TICKET_CREATE) && (
            <Link className="btn btn-outline-light btn-sm px-3" to={AppRoutes.TICKETS.CREATE}>
              Nuevo ticket
            </Link>
          )}

          {user && (
            <div className="user-badge-container small d-flex align-items-center gap-2 ">
              <span>
                {user.userName} {user.userLastname}
              </span>
              <span className="text-muted-custom">•</span>
              <span className="user-role-highlight text-uppercase">
                {Object.keys(ROLES).find(key => ROLES[key as keyof typeof ROLES] === user?.roleId)}
              </span>
            </div>
          )}

          <button className="btn btn-sm btn-danger" onClick={logout}>
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};