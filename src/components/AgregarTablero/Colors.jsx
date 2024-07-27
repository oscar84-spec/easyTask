import { styledColors } from "../../assets/styledComponents/AgregarTablero/StyledColors";

const Colors = ({ color, getColor }) => {
  const { ColorsLabel, ColorsInput, ColorsDiv } = styledColors;
  const { color1, color2 } = color;
  const enviarColor = (colorSelect) => getColor(colorSelect);

  return (
    <ColorsLabel>
      <ColorsInput
        type='radio'
        name={color}
        id=''
        onChange={() => enviarColor(color)}
      />
      <ColorsDiv $color1={color1} $color2={color2} />
    </ColorsLabel>
  );
};

export default Colors;
