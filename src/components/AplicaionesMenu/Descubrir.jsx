import { styledDescubrir } from "../../assets/styledComponents/AplicacionesHDMenu/StyledDescubrir";

const Descubrir = ({ desc }) => {
  const { icon, appName, appDescription } = desc;
  const {
    ContainerApp,
    ContainerIcon,
    ContainerText,
    AppName,
    AppDescription,
  } = styledDescubrir;
  return (
    <ContainerApp>
      <ContainerIcon>{icon}</ContainerIcon>
      <ContainerText>
        <AppName>{appName}</AppName>
        <AppDescription>{appDescription}</AppDescription>
      </ContainerText>
    </ContainerApp>
  );
};

export default Descubrir;
