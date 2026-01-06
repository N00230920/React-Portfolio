import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectShowLayout from "../components/ProjectShowLayout";
import { getProjectBySlug } from "../assets/data/projects";

export default function ProjectShow() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-sand text-olive">
        <NavBar />
        <main className="mx-auto max-w-6xl px-6 pt-14 pb-24">
          <p className="font-sans opacity-80">Project not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand text-olive overflow-x-hidden">
      <NavBar />
      <ProjectShowLayout project={project} />
      <Footer />
    </div>
  );
}
