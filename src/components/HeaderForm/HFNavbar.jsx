import "../../assets/css/header_form/header_form_nav.css";
import Button from "../Button/Button";

const HFNavbar = () => {
  return (
    <div className='hfnav'>
      <Button
        text='Iniciar Sesión'
        textColor='#f1f9f9'
        bgColor='#447775'
        tipo='button'
        url=''
      />
      <Button
        text='Registro'
        textColor='#1e1e1e'
        bgColor='#82C4D7'
        tipo='button'
        url='/registro'
      />
    </div>
  );
};

export default HFNavbar;
