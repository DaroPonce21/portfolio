import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__content">
        <div className="hero__info">
          <div className="hero__status">
            <span className="hero__status-dot" aria-hidden="true"></span>

            <span>Disponible para oportunidades</span>

            <span className="hero__status-separator">·</span>

            <span className="hero__status-tech">React & JavaScript</span>
          </div>

          <h1 className="hero__title">
            Construyo experiencias web modernas, claras y funcionales.
          </h1>

          <p className="hero__description">
            Desarrollador frontend enfocado en crear aplicaciones web
            responsivas y mantenibles utilizando React, JavaScript y CSS.
          </p>

          <div className="hero__meta">
            <span>Buenos Aires, Argentina</span>
            <span aria-hidden="true">·</span>
            <span>Frontend Developer</span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="hero__primary-button">
              Ver proyectos
            </a>

            <a
              href="/cv/Dario-Ponce-CV.pdf"
              className="hero__secondary-button"
              download
            >
              Descargar CV
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/DaroPonce21"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dario-ponce/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img
              src="/images/profile/dario.png"
              alt="Darío Ponce"
              className="hero__image"
            />
          </div>

          <div className="hero__profile">
            <div>
              <strong>Darío Ponce</strong>
              <span>Frontend Developer</span>
            </div>

            <span className="hero__profile-tech">React · JS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
