import "../../assets/css/header/header.css";
import HLogo from "./HLogo";
import HMenu from "./HMenu";
import HNavbarMenu from "./HNavbarMenu";
import Button from "../Button/Button";

const Header = ({ pathLogo }) => {
  return (
    <header className='header'>
      <HLogo pathLogo={pathLogo} />
      <HNavbarMenu />
      <HMenu />
      <div className='header__btn'>
        <Button
          text='Iniciar Sesión'
          textColor='#f1f9f9'
          bgColor='#1C6378'
          url=''
          tipo='button'
        />
        <Button
          text='Regístrate'
          textColor='#1e1e1e'
          bgColor='#82C4D7'
          url=''
          tipo='button'
        />
      </div>
    </header>
  );
};

export default Header;
