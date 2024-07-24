import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../assets/css/header/header_menu.css";
import { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";

const HMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className='menu' onClick={() => setShowMenu(!showMenu)}>
        <IoIosMenu />
      </div>

      {showMenu && (
        <div className='menu__navbar-container'>
          <ul className='menu__navbar textSubtitle'>
            <Link className='menu__navbar-link'>Funciones</Link>
            <Link className='menu__navbar-link'>Características</Link>
            <Link className='menu__navbar-link'>Planes</Link>
            <Link className='menu__navbar-link'>Testimonios</Link>
          </ul>
          <Button
            text='Iniciar Sesión'
            textColor='#f1f9f9'
            bgColor='#447775'
            url='/login'
            tipo='button'
          />
          <Button
            text='Regístrate'
            textColor='#1e1e1e'
            bgColor='#82C4D7'
            url='/registro'
            tipo='button'
          />
        </div>
      )}
    </>
  );
};

export default HMenu;
