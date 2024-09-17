import { Link } from "react-router-dom";

function Footer() {
  return (
  <footer className="footer">
  <nav>
    <ul>   
      <li><Link to="">A jugar</Link></li>
      <li><Link to ="">¿Como se juega?</Link></li>
      <li><Link to="">Mas opciones</Link></li>

       {/* <li className="footer__menu-item">
        <a className="footer__menu-link" href="#/">A jugar</a>
      </li>
      <li className="footer__menu-item">
        <a className="footer__menu-link active" href="#/instructions"
          >¿Cómo se juega?</a
        >
      </li>
      <li className="footer__menu-item">
        <a className="footer__menu-link" href="#/options">Más opciones</a>
      </li> */}
    </ul>
  </nav>
  <small className="footer__copy">© Adalab</small>
</footer>
  );
}

export default Footer;