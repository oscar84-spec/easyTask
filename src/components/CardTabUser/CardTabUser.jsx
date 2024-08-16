import { styledCardUser } from "../../assets/styledComponents/TabUser/StyledCardTabUser";
import { IoCloseOutline } from "react-icons/io5";
import { apiFetch } from "../../JS/Fetch/api";

const CardTabUser = ({ card, handleDragStart, onUpdated }) => {
  const {
    ContainerCard,
    ContainerNameIcon,
    NameCard,
    CardIcon,
    ContainerDesc,
    TagColor,
    CardDesc,
  } = styledCardUser;
  const { nameCard, color, desc, id, idList } = card;
  const { deleteCard } = apiFetch;

  const eliminarTarjeta = async (idCard) => {
    await deleteCard(idCard);
    onUpdated();
  };

  return (
    <ContainerCard
      draggable='true'
      onDragStart={(e) => handleDragStart(e, id, idList)}
    >
      <ContainerNameIcon>
        <NameCard>{nameCard}</NameCard>
        <CardIcon onClick={() => eliminarTarjeta(id)}>
          <IoCloseOutline />
        </CardIcon>
      </ContainerNameIcon>
      <ContainerDesc>
        <TagColor $color={color} />
        <CardDesc>{desc}</CardDesc>
      </ContainerDesc>
    </ContainerCard>
  );
};

export default CardTabUser;
