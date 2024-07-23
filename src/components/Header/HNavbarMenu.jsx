import { Link } from "react-router-dom";
import "../../assets/css/header/header_navbar.css";

const HNavbarMenu = () => {
  return (
    <ul className='navbar textSubtitle'>
      <Link className='navbar__link'>Funciones</Link>
      <Link className='navbar__link'>Características</Link>
      <Link className='navbar__link'>Planes</Link>
      <Link className='navbar__link'>Testimonios</Link>
    </ul>
  );
};

export default HNavbarMenu;
