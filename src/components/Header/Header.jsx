import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const navigationLinks = [
  {
    label: "Proyectos",
    to: "/#projects",
  },
  {
    label: "Tecnologías",
    to: "/#technologies",
  },
  {
    label: "Sobre mí",
    to: "/#about",
  },
  {
    label: "Contacto",
    to: "/#contact",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header__brand">
          <Link to="/" className="header__name">
            Darío Ponce
          </Link>

          <span className="header__badge">Frontend</span>
        </div>

        <nav className="header__nav" aria-label="Navegación principal">
          {navigationLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__controls">
          <button
            className="header__theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Cambiar a tema claro"
                : "Cambiar a tema oscuro"
            }
            title={
              theme === "dark"
                ? "Cambiar a tema claro"
                : "Cambiar a tema oscuro"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <div className="header__actions">
            <a href="/cv/Dario-Ponce-CV.pdf" className="header__cv" download>
              Descargar CV
            </a>

            <Link to="/#contact" className="header__contact">
              Hablemos
            </Link>
          </div>

          <button
            className={`header__menu-button ${
              isMenuOpen ? "header__menu-button--open" : ""
            }`}
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="header__mobile-nav"
          aria-label="Navegación móvil"
        >
          <div className="container header__mobile-content">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/cv/Dario-Ponce-CV.pdf"
              className="header__mobile-cv"
              onClick={() => setIsMenuOpen(false)}
              download
            >
              Descargar CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
