import ConstructionSection from "../components/ConstructionSection.jsx";
import PageCTA from "../components/PageCTA.jsx";
import PageIntro from "../components/PageIntro.jsx";
import ServicesBento from "../components/ServicesBento.jsx";

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        chapter="Our services"
        description="High-accuracy road and infrastructure surveys, supported by modern GPS, drone, and GIS technology."
        eyebrow="Survey expertise / Services"
        title="Reliable survey data for every stage of the project."
      />
      <ServicesBento />
      <ConstructionSection />
      <PageCTA
        description="Tell us about your route, site, or corridor and we will help identify the right survey scope."
        title="Let’s define the right scope."
      />
    </>
  );
}
