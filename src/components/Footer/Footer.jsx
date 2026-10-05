import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <span>© {currentYear} Darío Ponce</span>

        <a href="#top">Volver arriba ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
