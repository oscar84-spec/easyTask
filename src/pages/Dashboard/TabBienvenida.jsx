import { styledTabbienvenida } from "../../assets/styledComponents/Tableros/StyledTabBienvenida";

const TabBienvenida = ({ data }) => {
  const { ContainerBienvenida, SpanTitle, SpanText } = styledTabbienvenida;
  const { nombre } = data;
  return (
    <ContainerBienvenida>
      <SpanTitle>Bienvenido(a) {nombre}</SpanTitle>
      <SpanText>Aquí encontrarás todos tus tableros</SpanText>
    </ContainerBienvenida>
  );
};

export default TabBienvenida;
