import { Link } from "react-router-dom";
import { AppRoutes } from "../../../../app/router/AppRoutes";

export default function LandingNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-secondary-subtle bg-dark sticky-top">
      <div className="container py-2">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="/">
          <span className="brand-icon">E4</span>
          <span>E4-Support Desk</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#landingNavbar"
          aria-controls="landingNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="landingNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#features">Características</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workflow">Flujo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roles">Roles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roles">Roles</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary btn-sm px-3" href={`${AppRoutes.LANDING.ABOUT}`}>
                About
              </a>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light btn-sm px-3" to={AppRoutes.AUTH.LOGIN}>
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}