import { stylesHDLogo } from "../../assets/styledComponents/HeaderDashboard/StyledHDLogo";
import { Link } from "react-router-dom";
const HDLogo = ({ userId, theme }) => {
  const { Logo } = stylesHDLogo;
  return (
    <Link to={`/dashboard/${userId}/home`}>
      <Logo $theme={theme} />
    </Link>
  );
};

export default HDLogo;
