import { Muted, SectionTitle } from "@/components/ui/Typography";
import { projectsData } from "@/data/projects";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const { title, subtitle, projects } = projectsData;

  return (
    <section id="projects">
      <Muted>{subtitle}</Muted>
      <SectionTitle>{title}</SectionTitle>
      <ul className="grid grid-cols-1 content-center gap-6 sm:gap-8">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
