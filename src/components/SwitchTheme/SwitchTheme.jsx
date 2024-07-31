import { styledSwitch } from "../../assets/styledComponents/SwitchTheme/StyledSwitchTheme";
import { themeUser } from "../../JS/Themes/themeUser";

const SwitchTheme = ({ theme, setTheme }) => {
  const { ButtonTheme, ContainerSwitch, SwitchCircle } = styledSwitch;
  const { updateThemeUser } = themeUser;

  const changeTheme = async () => {
    const accountId = localStorage.getItem("userId");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await updateThemeUser(accountId, newTheme);
  };

  let modo = theme === "light" ? "Claro" : "Oscuro";

  return (
    <ButtonTheme>
      Tema {modo}
      <ContainerSwitch onClick={changeTheme}>
        <SwitchCircle $theme={theme}></SwitchCircle>
      </ContainerSwitch>
    </ButtonTheme>
  );
};

export default SwitchTheme;
