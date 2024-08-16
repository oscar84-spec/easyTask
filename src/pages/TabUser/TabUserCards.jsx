import { IoAddOutline } from "react-icons/io5";
import { styledTabUserCards } from "../../assets/styledComponents/TabUser/StyledTabUserCards";
import { styledAddLists } from "../../assets/styledComponents/TabUser/StyledAddList";
import { styledAgregarTablero } from "../../assets/styledComponents/AgregarTablero/StyledAgregarTablero";
import Inputs from "../../components/Inputs/Inputs";
import { useState } from "react";
import ColorsCard from "../../components/ColorsCard/ColorsCard";
import { apiFetch } from "../../JS/Fetch/api";

const TabUserCards = ({ idList, onUpdated }) => {
  const { ContainerAddCard, ButtonAddCards, ContainerBg } = styledTabUserCards;
  const { FormAddList } = styledAddLists;
  const { ContainerButtons, ButtonAgregar, ButtonCancelar } =
    styledAgregarTablero;
  const { addCard } = apiFetch;

  const [showCard, setShowCard] = useState(false);
  const [nameCard, setNameCard] = useState("");
  const [desc, setDesc] = useState("");
  const colors = [
    { text: "Urgente", bgColor: "red" },
    { text: "Urge, pero puede esperar", bgColor: "orange" },
    { text: "No urge", bgColor: "green" },
  ];

  const [newColor, setNewColor] = useState([]);

  const getColor = (colorSelect) => setNewColor(colorSelect);

  const agregarTarjeta = async (e) => {
    e.preventDefault();
    try {
      await addCard(idList, desc, newColor, nameCard);
      if (addCard) {
        setShowCard(!showCard);
        setDesc("");
        setNameCard("");
        onUpdated();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ContainerAddCard>
      <ButtonAddCards onClick={() => setShowCard(!showCard)}>
        <IoAddOutline /> <span>Agregar tarjeta</span>
      </ButtonAddCards>
      {showCard && (
        <FormAddList onSubmit={agregarTarjeta}>
          <Inputs
            textLabel='Nombre de la Tarjeta'
            textPlaceholder=''
            idForm='card'
            tipo='text'
            clase=''
            claseLabel=''
            valor={nameCard}
            actualizarValor={setNameCard}
          />
          <Inputs
            textLabel='Descripción'
            textPlaceholder=''
            idForm='desc'
            tipo='text'
            clase=''
            claseLabel=''
            valor={desc}
            actualizarValor={setDesc}
          />
          <ContainerBg>
            {colors.map((color, index) => (
              <ColorsCard key={index} color={color} getColor={getColor} />
            ))}
          </ContainerBg>
          <ContainerButtons>
            <ButtonAgregar type='submit'>Agregar</ButtonAgregar>
            <ButtonCancelar
              type='button'
              onClick={() => setShowCard(!showCard)}
            >
              Cancelar
            </ButtonCancelar>
          </ContainerButtons>
        </FormAddList>
      )}
    </ContainerAddCard>
  );
};

export default TabUserCards;
