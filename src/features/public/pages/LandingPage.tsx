import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../app/router/AppRoutes";
import "../../../styles/landing.css";
import LandingNavbar from "./landing/LandingNavbar";
import HeroSection from "./landing/HeroSection";
import FeaturesSection from "./landing/FeaturesSection";
import { landingData } from "./landing/data";
import WorkflowSection from "./landing/WorkflowSection";
import RolesSection from "./landing/RolesSection";
import CallToActionSection from "./landing/CallToActionSection";
import LandingFooter from "./landing/LandingFooter";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing-page bg-dark text-light min-vh-100">
      <LandingNavbar />
      <HeroSection
        onLogin={() => navigate(AppRoutes.AUTH.LOGIN)}
      />
      <FeaturesSection features={landingData.features} />
      <WorkflowSection statuses={landingData.statuses} />
      <RolesSection roles={landingData.roles} />
      <CallToActionSection
        onLogin={() => navigate(AppRoutes.AUTH.LOGIN)}
      />
      <LandingFooter />
    </main>
  );
}
