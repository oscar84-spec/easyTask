import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "../../assets/css/header_form/header_form_menu.css";
import { useState } from "react";
import Button from "../Button/Button";

const HFMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <i className='hfmenu__icon' onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <IoClose /> : <IoIosMenu />}
      </i>
      {showMenu && (
        <div className='hfmenu__dropdown'>
          <Button
            text='Iniciar Sesión'
            textColor='#f1f9f9'
            bgColor='#447775'
            tipo='button'
            url='/login'
          />
          <Button
            text='Registro'
            textColor='#1e1e1e'
            bgColor='#82C4D7'
            tipo='button'
            url='/registro'
          />
        </div>
      )}
    </>
  );
};

export default HFMenu;
