import { styledTabbienvenida } from "../../assets/styledComponents/Tableros/StyledTabBienvenida";

const TabBienvenida = () => {
  const { ContainerBienvenida, SpanTitle, SpanText } = styledTabbienvenida;
  return (
    <ContainerBienvenida>
      <SpanTitle>Bienvenido Oscar</SpanTitle>
      <SpanText>Aquí encontrarás todos tus tableros</SpanText>
    </ContainerBienvenida>
  );
};

export default TabBienvenida;
