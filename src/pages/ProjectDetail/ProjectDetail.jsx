import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import projects from "../../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return (
      <>
        <Header />
        <main className="project-detail">
          <div className="container">
            <h1>Proyecto no encontrado</h1>

            <Link to="/#projects">Volver a proyectos</Link>
          </div>
        </main>
      </>
    );
  }

  const caseStudy = project.caseStudy;

  return (
    <>
      <Header />
      <main className="project-detail">
        <section className="project-detail__hero">
          <div className="container">
            <Link to="/#projects" className="project-detail__back">
              ← Volver a proyectos
            </Link>

            <div className="project-detail__hero-content">
              <div>
                <span className="project-detail__category">
                  {project.category}
                </span>

                <h1 className="project-detail__title">{project.title}</h1>

                <p className="project-detail__description">
                  {project.description}
                </p>
              </div>

              <div className="project-detail__hero-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-detail__primary-link"
                  >
                    Visitar proyecto ↗
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-detail__secondary-link"
                  >
                    Ver código ↗
                  </a>
                )}
              </div>
            </div>

            <ul className="project-detail__technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div className="project-detail__visual">
              <img
                src={project.image}
                alt={`Captura de ${project.title}`}
                className="project-detail__image"
              />
            </div>
          </div>
        </section>

        {caseStudy && (
          <section className="case-study">
            <div className="container">
              <div className="case-study__intro">
                <article className="case-study__section">
                  <span className="case-study__number">01</span>

                  <div>
                    <h2>El problema</h2>
                    <p>{caseStudy.problem}</p>
                  </div>
                </article>

                <article className="case-study__section">
                  <span className="case-study__number">02</span>

                  <div>
                    <h2>La solución</h2>
                    <p>{caseStudy.solution}</p>
                  </div>
                </article>
              </div>

              <div className="case-study__architecture">
                <span className="case-study__label">Arquitectura</span>

                <h2>Cómo funciona</h2>

                <div className="architecture">
                  {caseStudy.architecture.map((item, index) => (
                    <div className="architecture__item" key={item}>
                      <span className="architecture__technology">{item}</span>

                      {index < caseStudy.architecture.length - 1 && (
                        <span
                          className="architecture__arrow"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-study__columns">
                <div>
                  <span className="case-study__label">Mi trabajo</span>

                  <h2>Qué desarrollé</h2>

                  <ul className="case-study__list">
                    {caseStudy.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="case-study__label">Desarrollo</span>

                  <h2>Desafíos técnicos</h2>

                  <ul className="case-study__list">
                    {caseStudy.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                <div className="case-study__gallery">
                  <header className="case-study__gallery-header">
                    <span className="case-study__label">El producto</span>
                    <h2>Una mirada al proyecto</h2>
                    <p>
                      Algunas de las pantallas y experiencias desarrolladas para
                      el sitio.
                    </p>
                  </header>

                  <div className="case-study__gallery-list">
                    {caseStudy.gallery.map((item, index) => (
                      <figure
                        className={`case-study__gallery-item ${
                          index % 2 !== 0
                            ? "case-study__gallery-item--reverse"
                            : ""
                        }`}
                        key={item.image}
                      >
                        <div className="case-study__gallery-visual">
                          <img
                            src={item.image}
                            alt={`${item.title} de ${project.title}`}
                            loading="lazy"
                          />
                        </div>

                        <figcaption className="case-study__gallery-info">
                          <span className="case-study__gallery-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3>{item.title}</h3>

                          <p>{item.description}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default ProjectDetail;
