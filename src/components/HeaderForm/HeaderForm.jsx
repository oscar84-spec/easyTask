import "../../assets/css/header_form/header_form.css";
import HFMenu from "./HFMenu";
import HFNavbar from "./HFNavbar";
import { Link } from "react-router-dom";

const HeaderForm = () => {
  return (
    <header className='header-form'>
      <Link to='/'>
        <div className='header-form__logo'></div>
      </Link>
      <HFMenu />
      <HFNavbar />
    </header>
  );
};

export default HeaderForm;
