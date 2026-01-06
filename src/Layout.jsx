import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Layout({ children, activeSection, isDark, toggleTheme }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar
        activeSection={activeSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {children}

      <Footer isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}
