import "../../assets/css/inputs/inputs.css";

const Inputs = ({ textLabel, textPlaceholder, tipo, idForm, clase }) => {
  return (
    <div className='input'>
      <label htmlFor={idForm} className='input__label textBody'>
        {textLabel}
      </label>
      <input
        type={tipo}
        className={`input__input ${clase}`}
        name={idForm}
        id={idForm}
        placeholder={textPlaceholder}
      />
    </div>
  );
};

export default Inputs;
