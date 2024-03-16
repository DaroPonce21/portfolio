import { Link } from 'react-router-dom';
import logo from '../assets/logoweb.png'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt='logo' />
          <Link to="/">Dario Ponce</Link>
        </div>
        <div className="nav-links">
          <Link className='link' to="/">Inicio</Link>
          <Link className='link' to="/aboutme">Sobre mi</Link>
          <Link className='link' to="/works">Trabajos y proyectos</Link>
          <Link className='link'to="/skills">
            Habilidades y experiencia
          </Link>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
