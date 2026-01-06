import { Link } from "react-router-dom";

export default function ProjectShowLayout({ project }) {
  const hero = project.screenshots?.[0]?.url;

  return (
    <main className="mx-auto max-w-6xl px-6 pt-14 pb-24">
      <Link to="/projects" className="font-sans text-sm opacity-70 hover:opacity-100">
        ← Back to Projects
      </Link>

      <h1 className="mt-6 font-serif text-6xl leading-none md:text-7xl">
        {project.title}
      </h1>

      <p className="mt-4 max-w-2xl font-sans opacity-80">
        {project.description}
      </p>

      {/* Hero */}
      <div className="mt-10 overflow-hidden rounded-3xl bg-card shadow-soft">
        {hero ? (
          <img src={hero} alt={project.title} className="h-[420px] w-full object-cover" />
        ) : (
          <div className="h-[420px] w-full bg-primary-foreground/30" />
        )}
      </div>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {(project.technologies || []).map((t) => (
              <span
                key={t}
                className="rounded-md bg-card px-3 py-1 font-sans text-sm text-card-foreground shadow-soft"
              >
                {t}
              </span>
            ))}
          </div>

          {project.tags?.length ? (
            <>
              <h3 className="mt-10 font-serif text-2xl">Tags</h3>
              <p className="mt-3 font-sans opacity-80">{project.tags.join(" • ")}</p>
            </>
          ) : null}
        </div>

        <aside className="rounded-2xl bg-card p-6 text-card-foreground shadow-soft">
          <h3 className="font-serif text-2xl">Links</h3>

          <div className="mt-4 space-y-3">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg bg-primary px-4 py-2 text-center font-sans text-sm text-olive hover:opacity-90"
              >
                Live Demo
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg bg-sand px-4 py-2 text-center font-sans text-sm text-olive shadow-soft hover:opacity-90"
              >
                GitHub Repo
              </a>
            ) : null}
          </div>

          {project.date ? (
            <p className="mt-6 font-sans text-sm opacity-70">
              {project.date}
            </p>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
