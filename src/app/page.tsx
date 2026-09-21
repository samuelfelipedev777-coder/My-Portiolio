import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function Home() {
  return (
    <main>
      {/* Sections */}
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}