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
  return (
    <ListContainer>
      <ContainerNameIcon>
        <ListName>{nombre}</ListName>
        <ListIconClose onClick={() => eliminarLista(id)}>
          <IoCloseOutline />
        </ListIconClose>
      </ContainerNameIcon>

      <ContainerCards>
        {/* Aqui se renderizan las tarjetas */}
        {showCards.map((card, index) => (
          <CardTabUser key={index} card={card} />
        ))}
      </ContainerCards>
      <TabUserCards idList={id} />
      {/* Este es el boton para agregar las tarjetas */}
    </ListContainer>
  );
};

export default TabUserLists;
