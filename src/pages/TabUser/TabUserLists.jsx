import { styledTabUserLists } from "../../assets/styledComponents/TabUser/StyledTabUserLists";
import CardTabUser from "../../components/CardTabUser/CardTabUser";
import TabUserCards from "./TabUserCards";
import { useState, useEffect } from "react";
import { apiFetch } from "../../JS/Fetch/api";
import { IoCloseOutline } from "react-icons/io5";

const TabUserLists = ({ list }) => {
  const {
    ListContainer,
    ListName,
    ContainerCards,
    ContainerNameIcon,
    ListIconClose,
  } = styledTabUserLists;
  const { nombre, id } = list;
  const { getCards, deleteList } = apiFetch;

  const [showCards, setShowCards] = useState([]);

  /* Obteniendo las tarjetas de json-server */
  useEffect(() => {
    const listCards = async (idList) => {
      try {
        const dataCards = await getCards(idList);
        setShowCards(dataCards);
      } catch (error) {
        console.error(error);
      }
    };
    listCards(id);
  }, [showCards]);

  const eliminarLista = async (idList) => {
    await deleteList(idList);
    const update = showCards.filter((card) => card.id !== idList);
    setShowCards(update);
  };

  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData("cardId", cardId);
    e.dataTransfer.setData("listId", id);
    console.log("drag start");
  };

  const handleDrop = async (e, destinationListId) => {
    const cardId = e.dataTransfer.getData("cardId");
    const sourceListId = e.dataTransfer.getData("listId");

    console.log(cardId, sourceListId, destinationListId);

    if (sourceListId === destinationListId) {
      return;
    }

    await fetch(`https://prueba-api-zeta.vercel.app/tarjetas/${cardId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idList: destinationListId }),
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <ListContainer
      onDrop={(e) => handleDrop(e, id)}
      onDragOver={handleDragOver}
    >
      <ContainerNameIcon>
        <ListName>{nombre}</ListName>
        <ListIconClose onClick={() => eliminarLista(id)}>
          <IoCloseOutline />
        </ListIconClose>
      </ContainerNameIcon>

      <ContainerCards>
        {/* Aqui se renderizan las tarjetas */}
        {showCards.map((card, index) => (
          <CardTabUser
            key={index}
            card={card}
            handleDragStart={handleDragStart}
          />
        ))}
      </ContainerCards>
      <TabUserCards idList={id} />
      {/* Este es el boton para agregar las tarjetas */}
    </ListContainer>
  );
};

export default TabUserLists;
