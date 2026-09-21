import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";

export default function Home() {
  return (
    <main>
      {/* Sections */}
      <HomeSection />
      <AboutSection />
      <section className="h-500"><h1>Teste</h1></section>
    </main>
  );
}