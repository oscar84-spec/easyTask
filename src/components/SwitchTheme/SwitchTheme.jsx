import { styledSwitch } from "../../assets/styledComponents/SwitchTheme/StyledSwitchTheme";

const SwitchTheme = () => {
  const { ButtonTheme, ContainerSwitch, SwitchCircle } = styledSwitch;
  return (
    <ButtonTheme>
      Tema Claro{" "}
      <ContainerSwitch>
        <SwitchCircle></SwitchCircle>
      </ContainerSwitch>
    </ButtonTheme>
  );
};

export default SwitchTheme;
