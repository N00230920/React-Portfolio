// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Tools from "../components/Tools";
import RecentWork from "../components/RecentWork";
import CTA from "../components/ContactCard";
import Footer from "../components/Footer";

export default function Home({
  activeSection,
  isDark,
  toggleTheme,
}) {
  return (
    <div className="min-h-screen bg-card-foreground text-card overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main className="mx-auto w-full max-w-6xl px-6">
        <Intro />
        <Tools />
        <RecentWork />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
