import { styledAgregarTablero } from "../../assets/styledComponents/AgregarTablero/StyledAgregarTablero";
import Inputs from "../Inputs/Inputs";
import Colors from "./Colors";
import { useState } from "react";
import { apiFetch } from "../../JS/Fetch/api";

const AgregarTablero = ({ valor, actualizarValor, data, getStateCurrent }) => {
  const {
    ContainerAgregar,
    SpanTitle,
    ContainerBg,
    ContainerButtons,
    ButtonAgregar,
    ButtonCancelar,
  } = styledAgregarTablero;
  const colors = [
    { color1: "#ebf5aa", color2: "#e92085" },
    { color1: "#efed9c", color2: "#ea260d" },
    { color1: "#cca3ef", color2: "#442540" },
    { color1: "#e7f7a7", color2: "#a2a7d7" },
    { color1: "#faf2ea", color2: "#9facd9" },
  ];

  const { agregarTablero } = apiFetch;
  const [nombreTablero, setNombreTablero] = useState("");
  const { id } = data;
  const [color, setColor] = useState([]);
  const [updated, setUpdated] = useState(false);

  const getColor = (newColor) => setColor(newColor);

  const addTab = async (e) => {
    e.preventDefault();
    try {
      actualizarValor(!valor);
      await agregarTablero(nombreTablero, color, id);
      setUpdated(!updated);
    } catch (error) {
      console.error(error);
    }
  };
  getStateCurrent(updated);

  return (
    <ContainerAgregar onSubmit={addTab}>
      <SpanTitle>Crear Tablero</SpanTitle>
      <ContainerBg>
        {colors.map((color, index) => (
          <Colors key={index} color={color} getColor={getColor} />
        ))}
      </ContainerBg>
      <Inputs
        textLabel='Nombre del Tablero'
        textPlaceholder=''
        idForm='tab'
        clase=''
        claseLabel=''
        valor={nombreTablero}
        actualizarValor={setNombreTablero}
      />
      <ContainerButtons>
        <ButtonAgregar type='submit'>Agregar</ButtonAgregar>
        <ButtonCancelar onClick={() => actualizarValor(!valor)} type='button'>
          Cancelar
        </ButtonCancelar>
      </ContainerButtons>
    </ContainerAgregar>
  );
};

export default AgregarTablero;
