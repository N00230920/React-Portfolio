import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../assets/data/projects";

export default function RecentWork() {
  const projects = getAllProjects().slice(0, 3);

  return (
    <section id="projects" className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center font-serif text-4xl md:text-5xl">
          Recent Work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="rounded-lg bg-card px-5 py-2 font-sans text-lg text-card-foreground shadow-soft hover:opacity-90"
          >
            See all Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
