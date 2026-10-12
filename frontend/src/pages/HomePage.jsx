import AboutSection from "../components/AboutSection.jsx";
import ConstructionSection from "../components/ConstructionSection.jsx";
import Hero from "../components/Hero.jsx";
import MissionVisionSection from "../components/MissionVisionSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import SmartQuoteEstimator from "../components/SmartQuoteEstimator.jsx";
import ServicesBento from "../components/ServicesBento.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ConstructionSection />
      <ServicesBento />
      <MissionVisionSection />
      <ProjectsSection />
      <SmartQuoteEstimator />
    </>
  );
}
