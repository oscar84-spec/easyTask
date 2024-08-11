import "../../assets/css/registro/registro.css";
import HeaderForm from "../../components/HeaderForm/HeaderForm";
import Inputs from "../../components/Inputs/Inputs";
import { useState } from "react";
import { valid } from "../../JS/validaciones/validaciones";
import { apiFetch } from "../../JS/Fetch/api";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [surname, setSurname] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorSurname, setErrorSurname] = useState("");
  const [errorUser, setErrorUser] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const theme = "light";

  const envioDatos = (e) => {
    e.preventDefault();
    const {
      validName,
      validSurname,
      validUser,
      validEmail,
      validPassword,
      confirmPassword,
    } = valid;
    let isValid = true;

    const errorNombre = validName(nombre);
    if (errorNombre) {
      isValid = false;
      setErrorNombre(errorNombre);
    } else {
      setErrorNombre("");
    }

    const errorSurname = validSurname(surname);
    if (errorSurname) {
      isValid = false;
      setErrorSurname(errorSurname);
    } else {
      setErrorSurname("");
    }

    const errorUser = validUser(user);
    if (errorUser) {
      isValid = false;
      setErrorUser(errorUser);
    } else {
      setErrorUser("");
    }

    const errorEmail = validEmail(email);
    if (errorEmail) {
      isValid = false;
      setErrorEmail(errorEmail);
    } else {
      setErrorEmail("");
    }
    const errorPassword = validPassword(password);
    if (errorPassword) {
      isValid = false;
      setErrorPassword(errorPassword);
    } else {
      setErrorPassword("");
    }
    const errorConfirm = confirmPassword(password, confirmPass);
    if (errorConfirm) {
      isValid = false;
      setErrorConfirm(errorConfirm);
    } else {
      setErrorConfirm("");
    }
    if (isValid) {
      const registrarUsuario = async () => {
        const { listaUsuario, agregarUsuario } = apiFetch;
        const data = await listaUsuario();
        const dataUsers = data.users;
        try {
          const userExist = dataUsers.some((dato) => dato.email === email);
          if (userExist) {
            alert("Ya existe un usuario");
          } else {
            await agregarUsuario(
              nombre,
              surname,
              user,
              email,
              password,
              confirmPass,
              theme
            );
            let nombreId = nombre.replace(" ", "").toLowerCase();
            navigate(`/dashboard/${nombreId}/home`);
          }
        } catch (error) {
          console.error(error);
        }
      };
      registrarUsuario();
    }
  };
  return (
    <section className='registro'>
      <HeaderForm />
      <div className='registro-container'>
        <form className='registro__form' onSubmit={envioDatos}>
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
                claseLabel='input__required'
                valor={nombre}
                actualizarValor={setNombre}
              />

              <Inputs
                textLabel='Apellido'
                textPlaceholder='Pérez'
                tipo='text'
                idForm='surname'
                clase='name-container__width'
                claseLabel=''
                valor={surname}
                actualizarValor={setSurname}
              />
            </div>
            {errorNombre && (
              <span className='message__error textBody'>{errorNombre}</span>
            )}
            {errorSurname && (
              <span className='message__error textBody'>{errorSurname}</span>
            )}
            <Inputs
              textLabel='Usuario'
              textPlaceholder=''
              tipo='text'
              idForm='user'
              clase=''
              claseLabel='input__required'
              valor={user}
              actualizarValor={setUser}
            />
            {errorUser && (
              <span className='message__error textBody'>{errorUser}</span>
            )}
            <Inputs
              textLabel='Correo Electrónico'
              textPlaceholder='m@example.com'
              tipo='email'
              idForm='mail'
              clase=''
              claseLabel='input__required'
              valor={email}
              actualizarValor={setEmail}
            />
            {errorEmail && (
              <span className='message__error textBody'>{errorEmail}</span>
            )}
            <Inputs
              textLabel='Contraseña'
              textPlaceholder=''
              tipo='password'
              idForm='contrasenia'
              clase=''
              claseLabel='input__required'
              valor={password}
              actualizarValor={setPassword}
            />
            {errorPassword && (
              <span className='message__error textBody'>{errorPassword}</span>
            )}
            <Inputs
              textLabel='Confirmar Contraseña'
              textPlaceholder=''
              tipo='password'
              idForm='confirm'
              clase=''
              claseLabel='input__required'
              valor={confirmPass}
              actualizarValor={setConfirmPass}
            />
            {errorConfirm && (
              <span className='message__error textBody'>{errorConfirm}</span>
            )}
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
