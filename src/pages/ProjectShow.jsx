import { useParams } from "react-router-dom";
import ProjectShowLayout from "../components/ProjectShowLayout";
import { getProjectBySlug } from "../assets/data/projects";

export default function ProjectShow() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-primary">

        <main className="mx-auto max-w-6xl px-6 pt-14 pb-24">
          <p className="font-sans opacity-80">Project not found.</p>
        </main>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-primary overflow-x-hidden">

      <ProjectShowLayout project={project} />

    </div>
  );
}
