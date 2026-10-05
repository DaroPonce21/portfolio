import { Link } from "react-router-dom";
function ProjectCard({ project, reverse }) {
  return (
    <article className={`project ${reverse ? "project--reverse" : ""}`}>
      <div className="project__visual">
        <div className="project__browser">
          <div className="project__browser-bar">
            <div className="project__browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="project__browser-title">{project.title}</span>
          </div>

          <img
            src={project.image}
            alt={`Captura de ${project.title}`}
            className="project__image"
          />
        </div>
      </div>

      <div className="project__info">
        <span className="project__category">{project.category}</span>

        <h3 className="project__title">{project.title}</h3>

        <p className="project__description">{project.description}</p>

        <ul className="project__technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project__actions">
          <Link
            to={`/projects/${project.id}`}
            className="project__primary-link"
          >
            Ver proyecto
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project__secondary-link"
            >
              Ver código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
