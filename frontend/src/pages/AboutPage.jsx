import AboutSection from "../components/AboutSection.jsx";
import ConstructionSection from "../components/ConstructionSection.jsx";
import MissionVisionSection from "../components/MissionVisionSection.jsx";
import PageCTA from "../components/PageCTA.jsx";
import PageIntro from "../components/PageIntro.jsx";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        chapter="About us"
        description="A trusted road survey partner delivering dependable data, modern technology, and clear insight for better infrastructure decisions."
        eyebrow="Terraline Infra / Our company"
        title="Grounded in precision. Built for progress."
      />
      <AboutSection />
      <ConstructionSection />
      <MissionVisionSection />
      <PageCTA
        description="Bring your next corridor, road, or infrastructure plan to a team built around accurate survey intelligence."
        title="Start building with Terraline."
      />
    </>
  );
}
