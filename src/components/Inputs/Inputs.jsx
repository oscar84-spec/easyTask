import "../../assets/css/inputs/inputs.css";
import { styledInput } from "../../assets/styledComponents/Input/Input";

const Inputs = ({
  textLabel,
  textPlaceholder,
  tipo,
  idForm,
  clase,
  claseLabel,
  valor,
  actualizarValor,
}) => {
  const { InputLabel } = styledInput;
  return (
    <div className='input'>
      <InputLabel
        htmlFor={idForm}
        className={`input__label textBody ${claseLabel}`}
      >
        {textLabel}
      </InputLabel>
      <input
        type={tipo}
        className={`input__input textBody ${clase}`}
        name={idForm}
        id={idForm}
        placeholder={textPlaceholder}
        value={valor}
        onChange={(e) => actualizarValor(e.target.value)}
      />
    </div>
  );
};

export default Inputs;
