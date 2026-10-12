import PageCTA from "../components/PageCTA.jsx";
import PageIntro from "../components/PageIntro.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        chapter="Projects"
        description="Survey work supporting road planning, development, and improved connectivity across Gujarat."
        eyebrow="Field work / Project portfolio"
        title="Measured on the ground. Moving Gujarat forward."
      />
      <ProjectsSection />
      <PageCTA
        description="From alignment studies to terrain analysis, Terraline helps teams make informed decisions before construction begins."
        title="Your next project starts with accurate data."
      />
    </>
  );
}
