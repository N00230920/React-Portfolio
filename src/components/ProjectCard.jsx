import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const cover = project.screenshots?.[0]?.url;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-3xl bg-card p-5 text-card-foreground shadow-soft transition hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-2xl bg-primary-foreground/30">
        {cover ? (
          <img
            src={cover}
            alt={project.title}
            className="aspect-square w-full object-cover transition group-hover:scale-[1.02]"
          />
        ) : (
          <div className="aspect-square w-full bg-primary-foreground/30" />
        )}
      </div>

      <h3 className="mt-4 font-serif text-2xl">{project.title}</h3>

      <div className="mt-2 flex flex-wrap gap-2">
        {(project.technologies || []).slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-md bg-card-foreground/10 px-2 py-1 font-sans text-xs opacity-90"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
