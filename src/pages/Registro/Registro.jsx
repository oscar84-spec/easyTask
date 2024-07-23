import "../../assets/css/registro/registro.css";
import HeaderForm from "../../components/HeaderForm/HeaderForm";
import Inputs from "../../components/Inputs/Inputs";

const Registro = () => {
  return (
    <section className='registro'>
      <HeaderForm />
      <div className='registro-container'>
        <form className='registro__form'>
          <div className='registro__form-info'>
            <h2 className='registro__form-title textTitle'>Regístrate</h2>
            <span className='registro__form-legend textSubtitle'>
              Ingresa tus datos para crear una cuenta
            </span>
          </div>
          <div className='registro__form-container-inputs'>
            <div className='name-container'>
              <Inputs
                textLabel='Nombre'
                textPlaceholder='Juan'
                tipo='text'
                idForm='nombre'
                clase='name-container__width'
              />
              <Inputs
                textLabel='Apellido'
                textPlaceholder='Pérez'
                tipo='text'
                idForm='surname'
                clase='name-container__width'
              />
            </div>
            <Inputs
              textLabel='Usuario'
              textPlaceholder=''
              tipo='text'
              idForm='user'
              clase=''
            />
            <Inputs
              textLabel='Correo Electrónico'
              textPlaceholder='m@example.com'
              tipo='email'
              idForm='mail'
              clase=''
            />
            <Inputs
              textLabel='Contraseña'
              textPlaceholder=''
              tipo='password'
              idForm='contrasenia'
              clase=''
            />
            <Inputs
              textLabel='Confirmar Contraseña'
              textPlaceholder=''
              tipo='password'
              idForm='confirm'
              clase=''
            />
            <button type='submit' className='name-container__bnt-form textBody'>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registro;
