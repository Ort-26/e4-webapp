import type { LandingFeature } from "./data";
import SectionHeader from "./SectionHeader";

interface FeaturesSectionProps {
  features: LandingFeature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <SectionHeader
          eyebrow="Características"
          title="Una base sólida para operar soporte"
          description="E4-Support Desk está pensado para manejar incidencias de forma ordenada, segura y fácil de extender."
        />

        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-12 col-md-6 col-lg-4" key={feature.title}>
              <div className="feature-card border-custom rounded-4 p-4 h-100">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h3 className="h5 fw-bold">{feature.title}</h3>
                <p className="text-muted-custom mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}