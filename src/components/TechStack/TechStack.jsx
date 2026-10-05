import technologies from "../../data/technologies";
import "./TechStack.css";

function TechStack() {
  return (
    <section className="tech-stack" id="technologies">
      <div className="container">
        <header className="tech-stack__header">
          <span className="tech-stack__eyebrow">Tecnologías</span>

          <h2>Herramientas que uso para construir</h2>

          <p>
            Mi stack está centrado en React y JavaScript, complementado con
            herramientas de backend, bases de datos y desarrollo web.
          </p>
        </header>

        <div className="tech-stack__grid">
          {technologies.map((group, index) => (
            <article className="tech-stack__group" key={group.category}>
              <span className="tech-stack__group-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{group.category}</h3>

              <p>{group.description}</p>

              <ul>
                {group.items.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
