import { stylesHLogo } from "../../assets/styledComponents/HLogo/HeaderLogo";

import { Link } from "react-router-dom";

const HLogo = ({ pathLogo }) => {
  const { HeaderLogo } = stylesHLogo;

  return (
    <Link to='/'>
      <HeaderLogo $pathLogo={pathLogo} />
    </Link>
  );
};

export default HLogo;
