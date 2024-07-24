const regex = /^[a-zA-ZÀ-ÿ'\s]+$/;

const validName = (nombre) => {
  const isValidName = regex.test(nombre);
  const inputName = document.getElementById("nombre");

  if (nombre === "") {
    inputName.classList.add("input__error");
    return "El campo nombre no debe estar vacío";
  } else if (!isValidName) {
    inputName.classList.add("input__error");
    return "El nombre no es valido";
  } else {
    inputName.classList.remove("input__error");
    return "";
  }
};

const validSurname = (apellido) => {
  const isValidSurname = regex.test(apellido);
  const inputSurname = document.getElementById("surname");
  if (apellido === "") {
    return "";
  } else if (!isValidSurname) {
    inputSurname.classList.add("input__error");
    return "El apellido no valido";
  } else {
    inputSurname.classList.remove("input__error");
    return "";
  }
};

const validUser = (usuario) => {
  const regexUser = /^[a-zA-Z][a-zA-Z0-9._]{2,15}$/;
  const isValidUser = regexUser.test(usuario);
  const inputUser = document.getElementById("user");
  if (usuario === "") {
    inputUser.classList.add("input__error");
    return "El campo usuario no debe estar vacío";
  } else if (!isValidUser) {
    inputUser.classList.add("input__error");
    return "El usuario no es valido";
  } else {
    inputUser.classList.remove("input__error");
    return "";
  }
};
const validEmail = (mail) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = regexEmail.test(mail);
  const inputEmail = document.getElementById("mail");
  if (mail === "") {
    inputEmail.classList.add("input__error");
    return "El campo email no debe estar vacío";
  } else if (!isValidEmail) {
    inputEmail.classList.add("input__error");
    return "El email no es valido";
  } else {
    inputEmail.classList.remove("input__error");
    return "";
  }
};
const validPassword = (password) => {
  const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const isValidPassword = regexPassword.test(password);
  const inputPassword = document.getElementById("contrasenia");
  if (password === "") {
    inputPassword.classList.add("input__error");
    return "El campo contraseña no debe estar vacío";
  } else if (!isValidPassword) {
    inputPassword.classList.add("input__error");
    return "La contraseña no es valida";
  } else {
    inputPassword.classList.remove("input__error");
    return "";
  }
};

const confirmPassword = (password, confirmPass) => {
  const inputConfirm = document.getElementById("confirm");
  if (confirmPass === "") {
    inputConfirm.classList.add("input__error");
    return "El campo no debe estar vacío";
  } else if (password !== confirmPass) {
    inputConfirm.classList.add("input__error");
    return "Las contraseñas no coinciden";
  } else {
    inputConfirm.classList.remove("input__error");
    return "";
  }
};

const validLogin = (usuario, contrasenia) => {
  const inputUser = document.getElementById("user");
  const inputContrasenia = document.getElementById("password");

  if (usuario === "" && contrasenia === "") {
    inputUser.classList.add("login__input-error");
    inputContrasenia.classList.add("login__input-error");
    return "Los campos no deben estar vacíos";
  } else {
    inputUser.classList.remove("login__input-error");
    inputContrasenia.classList.remove("login__input-error");
    return "";
  }
};

export const valid = {
  validName,
  validSurname,
  validUser,
  validEmail,
  validPassword,
  confirmPassword,
  validLogin,
};
