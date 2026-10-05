import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about__content">
        <div className="about__intro">
          <span className="about__eyebrow">Sobre mí</span>

          <h2>
            Desarrollo software con una mirada que va más allá del código.
          </h2>

          <div className="about__text">
            <p>
              Soy desarrollador frontend enfocado en React y JavaScript.
              Actualmente desarrollo proyectos web reales y personales mientras
              continúo profundizando en el ecosistema frontend.
            </p>

            <p>
              Antes de orientar mi carrera hacia tecnología trabajé durante más
              de diez años en comercio, ventas y coordinación de equipos. Esa
              experiencia me enseñó a entender necesidades, resolver problemas y
              trabajar con personas.
            </p>

            <p>
              Hoy traslado esa experiencia al desarrollo web, buscando entender
              primero la necesidad detrás de cada proyecto y construir
              soluciones claras, mantenibles y pensadas para quien las va a
              utilizar.
            </p>
          </div>
        </div>

        <div className="about__timeline">
          <span className="about__eyebrow">Trayectoria</span>

          <div className="timeline">
            <article className="timeline__item">
              <span className="timeline__date">2023 — Actualidad</span>

              <h3>Administración y auditoría</h3>

              <span className="timeline__company">Sector salud</span>

              <p>
                Gestión administrativa, revisión de documentación y seguimiento
                de procesos dentro del ámbito sanitario.
              </p>
            </article>

            <article className="timeline__item">
              <span className="timeline__date">2022</span>

              <h3>Formación Full Stack</h3>

              <span className="timeline__company">Henry</span>

              <p>
                Formación intensiva en desarrollo web con JavaScript, React,
                Node.js, Express y bases de datos.
              </p>
            </article>

            <article className="timeline__item">
              <span className="timeline__date">2011 — 2021</span>

              <h3>Jefe de depósito · Ventas</h3>

              <span className="timeline__company">Garbarino</span>

              <p>
                Coordinación de equipos, operaciones, inventario, atención al
                cliente y ventas.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
