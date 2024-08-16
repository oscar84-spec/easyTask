import { styledHDash } from "../../assets/styledComponents/HeaderDashboard/StyledHDash";
import HDAccountAvatar from "./HDAccountAvatar";
import HDAgregar from "./HDAgregar";
import HDLogo from "./HDLogo";
import HDMenu from "./HDMenu";
import HDNavbar from "./HDNavbar";

const HeaderDashboard = ({ userId, data, theme, setTheme, onUpdated }) => {
  const { HeaderContainer, ContainerMenu } = styledHDash;
  return (
    <HeaderContainer>
      <ContainerMenu>
        <HDMenu />
        <HDLogo userId={userId} theme={theme} />
        <HDNavbar />
        <HDAgregar data={data} onUpdated={onUpdated} />
      </ContainerMenu>
      <HDAccountAvatar data={data} theme={theme} setTheme={setTheme} />
    </HeaderContainer>
  );
};

export default HeaderDashboard;
