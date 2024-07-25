import { Link } from "react-router-dom";
import { styledHDNavbar } from "../../assets/styledComponents/HeaderDashboard/StyledHDNavbar";

const HDNavbar = () => {
  const { ContainerList, ListItem } = styledHDNavbar;
  return (
    <ContainerList>
      <ListItem>
        <Link>Espacios de trabajo</Link>
      </ListItem>
      <ListItem>
        <Link>Reciente</Link>
      </ListItem>
      <ListItem>
        <Link>Marcado</Link>
      </ListItem>
    </ContainerList>
  );
};

export default HDNavbar;
