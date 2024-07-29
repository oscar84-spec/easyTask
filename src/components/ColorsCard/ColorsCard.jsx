import { styledColorsCards } from "../../assets/styledComponents/ColorsCard/StyledColorsCards";

const ColorsCard = ({ color, getColor }) => {
  const { ContainerColors, InputCard, ColorsCard, SpanName } =
    styledColorsCards;
  const { bgColor, text } = color;

  const enviarColor = (colorSelect) => getColor(colorSelect);

  return (
    <ContainerColors>
      <SpanName>{text}</SpanName>
      <InputCard
        type='radio'
        name={color}
        onChange={() => enviarColor(color)}
      />
      <ColorsCard $bgColor={bgColor} />
    </ContainerColors>
  );
};

export default ColorsCard;
