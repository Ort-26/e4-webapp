import "../../../styles/about.css";
import AboutHeader from "./about/AboutHeader";
import AboutSections from "./about/AboutSections";
import ArchitectureSection from "./about/ArchitectureSection";
import AssumptionsSection from "./about/AsumptionSection";
import CaseStudySection from "./about/CaseStudySection";
import { aboutData } from "./about/data";
import EntityRelationshipSection from "./about/EntityRelationSection";
import PermissionsSection from "./about/PermissionsSection"; 
import WorkflowSection from "./about/WorkFlowSection";

export function AboutPage() {
  return (
    <main className="about-page bg-dark text-light min-vh-100">
      <div className="container-fluid">
        <div className="row">
          <AboutSections sections={aboutData.sections} />

          <section className="col-12 col-lg-9 col-xl-10 about-content">
            <div className="about-content-wrapper">
              <AboutHeader />
              <CaseStudySection />
              <WorkflowSection statuses={aboutData.statuses} />
              <AssumptionsSection />
              <ArchitectureSection stackItems={aboutData.stackItems} />
              <PermissionsSection rows={aboutData.permissions} />
              <EntityRelationshipSection />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
