import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(() => localStorage.getItem("dark") === "true");

  // Apply + persist theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("dark", String(isDark));
  }, [isDark]);

  // Active section observer (for nav highlighting)
  useEffect(() => {
    const sections = ["intro", "projects", "contact"];
    const targets = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setIsDark((m) => !m);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* subtle background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-25 blur-3xl">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary" />
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-accent" />
      </div>

      <Navbar activeSection={activeSection} isDark={isDark} toggleTheme={toggleTheme} />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Intro />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
