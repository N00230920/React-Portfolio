import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "../assets/data/projects";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-background text-primary">
      <main className="mx-auto max-w-6xl px-6 pt-14 pb-24">
        <h1 className="font-serif text-7xl md:text-8xl">Projects</h1>

        <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </section>
      </main>
    </div>
  );
}
