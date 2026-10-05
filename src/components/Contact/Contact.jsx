import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("daroponce21@gmail.com");

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el email:", error);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__info">
            <span className="contact__eyebrow">Contacto</span>

            <h2>¿Hablamos?</h2>

            <p>
              Estoy buscando oportunidades como Frontend Developer donde pueda
              seguir creciendo, aportar en proyectos reales y profundizar mi
              experiencia con React y JavaScript.
            </p>
          </div>

          <div className="contact__actions">
            <a href="mailto:daroponce21@gmail.com" className="contact__primary">
              Enviar email ↗
            </a>

            <button
              type="button"
              className="contact__link contact__copy"
              onClick={copyEmail}
            >
              <span>{emailCopied ? "Email copiado" : "Copiar email"}</span>
              <span aria-hidden="true">{emailCopied ? "✓" : "⧉"}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/dario-ponce/"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/DaroPonce21"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="contact__meta">
          <span>Buenos Aires, Argentina</span>
          <span>Frontend Developer · React & JavaScript</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
