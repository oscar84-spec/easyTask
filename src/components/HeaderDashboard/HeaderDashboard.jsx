import { styledHDash } from "../../assets/styledComponents/HeaderDashboard/StyledHDash";
import HDAccountAvatar from "./HDAccountAvatar";
import HDAgregar from "./HDAgregar";
import HDLogo from "./HDLogo";
import HDMenu from "./HDMenu";
import HDNavbar from "./HDNavbar";

const HeaderDashboard = ({ userId }) => {
  const { HeaderContainer, ContainerMenu } = styledHDash;
  return (
    <HeaderContainer>
      <ContainerMenu>
        <HDMenu />
        <HDLogo userId={userId} />
        <HDNavbar />
        <HDAgregar />
      </ContainerMenu>
      <HDAccountAvatar />
    </HeaderContainer>
  );
};

export default HeaderDashboard;
