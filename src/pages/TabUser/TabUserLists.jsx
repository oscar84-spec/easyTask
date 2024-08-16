import { styledTabUserLists } from "../../assets/styledComponents/TabUser/StyledTabUserLists";
import CardTabUser from "../../components/CardTabUser/CardTabUser";
import TabUserCards from "./TabUserCards";
import { useState, useEffect } from "react";
import { apiFetch } from "../../JS/Fetch/api";
import { IoCloseOutline } from "react-icons/io5";

const TabUserLists = ({ list, onUpdated }) => {
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
  const [updated, setUpdated] = useState(false);

  const actualizarTarjetas = () => setUpdated(!updated);

  /* Mostrando las tarjetas de la api */
  useEffect(() => {
    const listCards = async (idList) => {
      try {
        const dataCards = await getCards(idList);
        setShowCards(dataCards);
        setUpdated(!updated);
      } catch (error) {
        console.error(error);
      }
    };
    listCards(id);
  }, [id, updated]);

  const eliminarLista = async (idList) => {
    await deleteList(idList);
    const update = showCards.filter((card) => card.id !== idList);
    setShowCards(update);
    onUpdated();
  };

  const handleDragStart = (e, cardId, idList) => {
    e.dataTransfer.setData("cardId", cardId);
    e.dataTransfer.setData("listId", idList);
  };

  const handleDrop = async (e, destinationListId) => {
    const cardId = e.dataTransfer.getData("cardId");
    const sourceListId = e.dataTransfer.getData("listId");

    if (sourceListId === destinationListId) {
      return;
    }
    try {
      const response = await fetch(
        `https://api-easytask.vercel.app/tarjetas/${cardId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idList: destinationListId }),
        }
      );

      /* if (response.ok) {
        console.log("Tarjeta movida correctamente");
      } else {
        console.error("Error al mover la tarjeta");
      } */
    } catch (error) {
      console.error(error);
    }
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
            onUpdated={actualizarTarjetas}
          />
        ))}
      </ContainerCards>
      <TabUserCards idList={id} onUpdated={actualizarTarjetas} />
      {/* Este es el boton para agregar las tarjetas */}
    </ListContainer>
  );
};

export default TabUserLists;
