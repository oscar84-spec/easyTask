import "../../assets/css/login/login.css";
import HeaderForm from "../../components/HeaderForm/HeaderForm";
import Inputs from "../../components/Inputs/Inputs";
import { useState } from "react";
import { apiFetch } from "../../JS/Fetch/api";
import { RiErrorWarningLine } from "react-icons/ri";
import { valid } from "../../JS/validaciones/validaciones";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");

  const { iniciarSesion } = apiFetch;

  const handleLogin = async (e) => {
    e.preventDefault();
    const { validLogin } = valid;

    const errorLogin = validLogin(user, password);
    if (errorLogin) {
      setLoginError(errorLogin);
    } else {
      const data = await iniciarSesion(user, password);
      const nombre = data.nombre;
      if (data) {
        const nombreId = nombre.replace(" ", "").toLowerCase();
        navigate(`/dashboard/${nombreId}/home`);
      }
      setLoginError("");
    }
  };
  return (
    <section className='login'>
      <HeaderForm />
      <div className='login-container__form'>
        <form action='' className='login__form' onSubmit={handleLogin}>
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
              valor={user}
              actualizarValor={setUser}
            />
            <Inputs
              textLabel='Contraseña'
              textPlaceholder=''
              tipo='password'
              idForm='password'
              clase=''
              claseLabel='input__required'
              valor={password}
              actualizarValor={setPassword}
            />

            {loginError && (
              <span className='textBody login__error'>
                <RiErrorWarningLine /> {loginError}
              </span>
            )}
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
