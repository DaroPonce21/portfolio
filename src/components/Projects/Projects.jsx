import "./Projects.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <header className="projects__header">
          <span className="projects__eyebrow">Proyectos seleccionados</span>

          <h2>Proyectos seleccionados</h2>

          <p>
            Proyectos reales y personales desarrollados para resolver
            necesidades concretas y seguir profundizando mi experiencia con
            React y el ecosistema JavaScript.
          </p>
        </header>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
