import { v4 as uuid } from "uuid";

const urlFetch = "https://easy-task-lake.vercel.app/users";

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

const agregarTablero = async (nombreTab, fondo, userId) => {
  try {
    await fetch("http://localhost:5000/tableros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        nombreTab,
        fondo,
        userId,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

const getTableros = async (userId) => {
  try {
    const response = await fetch(
      `http://localhost:5000/tableros?userId=${userId}`
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteTabs = async (tabId) => {
  try {
    await fetch(`http://localhost:5000/tableros/${tabId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

const addList = async (nombre, idTab) => {
  try {
    await fetch("http://localhost:5000/listas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        nombre,
        idTab,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

const showList = async (idTab) => {
  try {
    const response = await fetch(`http://localhost:5000/listas?idTab=${idTab}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const addCard = async (idList, desc, color, nameCard) => {
  try {
    await fetch("http://localhost:5000/tarjetas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuid(),
        desc,
        color,
        idList,
        nameCard,
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

const getCards = async (idList) => {
  try {
    const response = await fetch(
      `http://localhost:5000/tarjetas?idList=${idList}`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteCard = async (idCard) => {
  try {
    await fetch(`http://localhost:5000/tarjetas/${idCard}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteList = async (listId) => {
  try {
    const response = await fetch(
      `http://localhost:5000/tarjetas?idList=${listId}`
    );

    const tarjetas = await response.json();

    for (const tarjeta of tarjetas) {
      await fetch(`http://localhost:5000/tarjetas/${tarjeta.id}`, {
        method: "DELETE",
      });
    }

    await fetch(`http://localhost:5000/listas/${listId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};
export const apiFetch = {
  listaUsuario,
  iniciarSesion,
  agregarUsuario,
  agregarTablero,
  getTableros,
  deleteTabs,
  addList,
  showList,
  addCard,
  getCards,
  deleteCard,
  deleteList,
};
