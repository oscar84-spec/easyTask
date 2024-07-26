import { styledColors } from "../../assets/styledComponents/AgregarTablero/StyledColors";

const Colors = ({ color }) => {
  const { ColorsLabel, ColorsInput, ColorsDiv } = styledColors;
  const { color1, color2 } = color;
  const manejarColor = (colorr) => {
    console.log(colorr);
  };
  return (
    <ColorsLabel>
      <ColorsInput
        type='radio'
        name={color}
        id=''
        onChange={() => manejarColor(color)}
      />
      <ColorsDiv $color1={color1} $color2={color2} />
    </ColorsLabel>
  );
};

export default Colors;
