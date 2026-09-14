import HomeSection from "./sections/HomeSection";

export default function Home() {
  return (
    <main>
      {/* Sections */}
      <HomeSection />

      <section className="h-screen">
        <div className="h-500 flex items-center justify-center">
          <h2 className="text-4xl">Second Section</h2>
        </div>
      </section>
    </main>
  );
}
