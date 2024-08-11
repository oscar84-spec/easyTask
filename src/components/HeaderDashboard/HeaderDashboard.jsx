import { styledHDash } from "../../assets/styledComponents/HeaderDashboard/StyledHDash";
import HDAccountAvatar from "./HDAccountAvatar";
import HDAgregar from "./HDAgregar";
import HDLogo from "./HDLogo";
import HDMenu from "./HDMenu";
import HDNavbar from "./HDNavbar";

const HeaderDashboard = ({
  userId,
  data,
  theme,
  setTheme,
  getStateCurrent,
}) => {
  const { HeaderContainer, ContainerMenu } = styledHDash;
  return (
    <HeaderContainer>
      <ContainerMenu>
        <HDMenu />
        <HDLogo userId={userId} theme={theme} />
        <HDNavbar />
        <HDAgregar data={data} getStateCurrent={getStateCurrent} />
      </ContainerMenu>
      <HDAccountAvatar data={data} theme={theme} setTheme={setTheme} />
    </HeaderContainer>
  );
};

export default HeaderDashboard;
