import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Intro from "./components/Intro";
import Tools from "./components/Tools";
import RecentWork from "./components/RecentWork";
import CTA from "./components/ContactCard";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectShow from "./pages/ProjectShow";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("dark", String(isDark));
  }, [isDark]);

  const toggleTheme = () => setIsDark((m) => !m);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            activeSection={activeSection}
            isDark={isDark}
            toggleTheme={toggleTheme}
          >
            <main className="mx-auto w-full max-w-6xl px-6">
              <Intro />
              <Tools />
              <RecentWork />
              <CTA />
            </main>
          </Layout>
        }
      />

      <Route
        path="/projects"
        element={
          <Layout isDark={isDark} toggleTheme={toggleTheme}>
            <Projects />
          </Layout>
        }
      />

      <Route
        path="/projects/:slug"
        element={
          <Layout isDark={isDark} toggleTheme={toggleTheme}>
            <ProjectShow />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout isDark={isDark} toggleTheme={toggleTheme}>
            <About />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout isDark={isDark} toggleTheme={toggleTheme}>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}
