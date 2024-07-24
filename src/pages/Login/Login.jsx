import "../../assets/css/login/login.css";
import HeaderForm from "../../components/HeaderForm/HeaderForm";
import Inputs from "../../components/Inputs/Inputs";

const Login = () => {
  return (
    <section className='login'>
      <HeaderForm />
      <div className='login-container__form'>
        <form action='' className='login__form'>
          <div className='login__form-info'>
            <h2 className='login__form-info-title textTitle'>Bienvenido</h2>
            <span className='login__form-info-text textBody'>
              Ingresa tu usuario y contraseña para acceder a tu cuenta!
            </span>
          </div>
          <div className='login__form-inputs'>
            <Inputs
              textLabel='Usuario'
              textPlaceholder='Usuario'
              tipo='text'
              idForm='user'
              clase=''
              claseLabel='input__required'
            />
            <Inputs
              textLabel='Contraseña'
              textPlaceholder=''
              tipo='password'
              idForm='password'
              clase=''
              claseLabel='input__required'
            />
            <button type='submit' className='login__form-btn textBody'>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
