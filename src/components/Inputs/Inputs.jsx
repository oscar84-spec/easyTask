import "../../assets/css/inputs/inputs.css";

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
  return (
    <div className='input'>
      <label htmlFor={idForm} className={`input__label textBody ${claseLabel}`}>
        {textLabel}
      </label>
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
