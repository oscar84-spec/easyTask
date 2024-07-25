import { stylesHDLogo } from "../../assets/styledComponents/HeaderDashboard/StyledHDLogo";
import { Link } from "react-router-dom";
const HDLogo = ({ userId }) => {
  const { Logo } = stylesHDLogo;
  return (
    <Link to={`/dashboard/${userId}/home`}>
      <Logo />
    </Link>
  );
};

export default HDLogo;
