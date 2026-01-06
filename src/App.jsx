import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Intro from "./components/Intro";
import Tools from "./components/Tools";
import RecentWork from "./components/RecentWork";
import CTA from "./components/ContactCard";
import Footer from "./components/Footer";

import Contact from "./pages/Contact";

import Projects from "./pages/Projects";
import ProjectShow from "./pages/ProjectShow";


function HomePage({ activeSection, isDark, toggleTheme }) {
  return (
    <div className="min-h-screen bg-sand text-olive overflow-x-hidden">
      <Navbar activeSection={activeSection} isDark={isDark} toggleTheme={toggleTheme} />

      <main className="mx-auto w-full max-w-6xl px-6">
        <Intro />
        <Tools />
        <RecentWork />
        <CTA />
      </main>

      <Footer toggleTheme={toggleTheme} isDark={isDark} />
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("dark", String(isDark));
  }, [isDark]);

  useEffect(() => {
    const sections = ["intro", "projects", "contact"];
    const targets = sections.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.35 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setIsDark((m) => !m);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            activeSection={activeSection}
            isDark={isDark}
            toggleTheme={toggleTheme}
          />
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectShow />} />

    </Routes>
  );
}
