import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getAllProjects } from "../assets/data/projects";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-sand text-olive">
      <NavBar />

      <main className="mx-auto max-w-6xl px-6 pt-14 pb-24">
        <h1 className="font-serif text-7xl md:text-8xl">Projects</h1>

        <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="rounded-3xl bg-card p-5 text-card-foreground shadow-soft hover:-translate-y-1 transition"
            >
              <div className="aspect-square rounded-2xl bg-primary-foreground/30" />
              <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
              <p className="mt-1 text-sm opacity-80">
                {p.technologies.join(" • ")}
              </p>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
