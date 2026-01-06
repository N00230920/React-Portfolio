import SunIcon from "../assets/SVG/sun.svg";
import MoonIcon from "../assets/SVG/moon.svg";
import LeafIcon from "../assets/SVG/leaf.svg";

export default function NavBar({ activeSection, isDark, toggleTheme }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const linkClass = (id) =>
  `font-serif text-lg md:text-xl tracking-wide transition-opacity ${
    activeSection === id
      ? "opacity-100"
      : "opacity-70 hover:opacity-100"
  }`;


  return (
    <header className="sticky top-0 z-50 bg-card text-card-foreground shadow-md shadow-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="font-serif text-2xl md:text-3xl">
          <img src={LeafIcon} alt="Leaf Icon" className="h-8 w-8" />
          </a>
        </div>

        {/* Links */}
        <nav className="hidden items-center gap-12 md:flex">
          <button onClick={() => scrollTo("projects")} className={linkClass("projects")}>
            Projects
          </button>
          <button onClick={() => scrollTo("resume")} className={linkClass("resume")}>
            Resume
          </button>
          <button onClick={() => scrollTo("about")} className={linkClass("about")}>
            About Me
          </button>
          <button onClick={() => scrollTo("contact")} className={linkClass("contact")}>
            Contact
          </button>
        </nav>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center rounded-full border border-card-foreground/25 px-3 py-1.5 hover:bg-card-foreground/10"
          aria-label="Toggle theme"
        >
          <img
            className="h-4 w-4 opacity-90"
            src={isDark ? MoonIcon : SunIcon}
            alt={isDark ? "Moon" : "Sun"}
          />
        </button>
      </div>
    </header>
  );
}
