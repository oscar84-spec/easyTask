import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import "../../assets/css/footer/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__rights'>
        <span className='footer__rights-text textBody'>
          © 2024 EasyTask. Todos los derechos reservados
        </span>
      </div>
      <div className='footer__policy'>
        <div className='footer__policy-links'>
          <Link className='footer__policy-links-link textBody'>
            Política de Privacidad
          </Link>
          <Link className='footer__policy-links-link textBody'>
            Términos de Uso
          </Link>
        </div>
        <div className='footer__policy-icons'>
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaDiscord />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
