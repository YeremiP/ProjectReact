import "./Footer.css";
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  return(
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Sobre Nosotros</h3>
        <p>Ofrecemos las mejores zapas calidad precio.</p>
      </div>
      <div className="footer-section">
        <h3>Enlaces Útiles</h3>
        <ul>
          <li><a href="/Home">Inicio</a></li>
          <li><a href="/Gallery">Modelos</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Redes Sociales</h3>
        <p>Síguenos:</p>
        <div className="social-icons">
        <ul>
          <li><a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
          <li><a href="https://github.com/YeremiP/ProjectReact" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
        </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; 2025 Bambas Inc. | <a href="/Copyright" target="_blank" rel="noopener noreferrer">Todos los derechos reservados.</a>
    </div>
  </footer>
  );
}

export default Footer;