import { styledAgregarTablero } from "../../assets/styledComponents/AgregarTablero/StyledAgregarTablero";
import Inputs from "../Inputs/Inputs";
import Colors from "./Colors";
import { useState } from "react";

const AgregarTablero = ({ valor, actualizarValor }) => {
  const {
    ContainerAgregar,
    SpanTitle,
    ContainerBg,
    ContainerButtons,
    ButtonAgregar,
    ButtonCancelar,
  } = styledAgregarTablero;
  const colors = [
    { color1: "#bdc3c7", color2: "#2c3e50" },
    { color1: "#c193c5", color2: "#7bc6cc" },
    { color1: "#000428", color2: "#004e92" },
    { color1: "#2980b9", color2: "#6dd5fa" },
    { color1: "#6190e8", color2: "#a7bfe8" },
  ];

  const [nombreTablero, setNombreTablero] = useState("");

  return (
    <>
      <ContainerAgregar>
        <SpanTitle>Crear Tablero</SpanTitle>
        <ContainerBg>
          {colors.map((color, index) => (
            <Colors key={index} color={color} />
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
          <ButtonAgregar onClick={() => actualizarValor(!valor)}>
            Agregar
          </ButtonAgregar>
          <ButtonCancelar onClick={() => actualizarValor(!valor)}>
            Cancelar
          </ButtonCancelar>
        </ContainerButtons>
      </ContainerAgregar>
    </>
  );
};

export default AgregarTablero;
