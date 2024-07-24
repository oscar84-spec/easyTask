import { v4 as uuid } from "uuid";

const urlFetch = "http://localhost:5000/users";

const listaUsuario = async () => {
  try {
    const response = await fetch(urlFetch);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const iniciarSesion = async (usuario, contrasenia) => {
  try {
    const response = await fetch("http://localhost:5000/users");
    const users = await response.json();

    const userFond = users.find(
      (user) => user.usuario === usuario && user.contrasenia === contrasenia
    );

    if (userFond) {
      localStorage.setItem("userId", userFond.id);
      return userFond;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

const agregarUsuario = async (
  nombre,
  apellido,
  usuario,
  email,
  contrasenia,
  confirmPass,
  theme
) => {
  try {
    await fetch(urlFetch, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        nombre,
        apellido,
        usuario,
        email,
        contrasenia,
        confirmPass,
        theme,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

export const apiFetch = { listaUsuario, iniciarSesion, agregarUsuario };
