import { TbError404 } from "react-icons/tb";

const updateThemeUser = async (userId, nuevoTema) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme: nuevoTema }),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el tema");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getThemeUser = async (userId) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(TbError404);
  }
};
export const themeUser = { updateThemeUser, getThemeUser };
