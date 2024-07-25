import { styledAplicaciones } from "../../assets/styledComponents/AplicacionesHDMenu/StyledAplicaciones";

const AplicacionesMenu = ({ app }) => {
  const { ListMenu } = styledAplicaciones;
  const { icon, text } = app;
  return (
    <ListMenu>
      {icon} {text}
    </ListMenu>
  );
};

export default AplicacionesMenu;
