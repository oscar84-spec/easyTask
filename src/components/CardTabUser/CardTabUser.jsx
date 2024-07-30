import { styledCardUser } from "../../assets/styledComponents/TabUser/StyledCardTabUser";
import { IoCloseOutline } from "react-icons/io5";
import { apiFetch } from "../../JS/Fetch/api";

const CardTabUser = ({ card, handleDragStart }) => {
  const {
    ContainerCard,
    ContainerNameIcon,
    NameCard,
    CardIcon,
    ContainerDesc,
    TagColor,
    CardDesc,
  } = styledCardUser;
  const { nameCard, color, desc, id } = card;
  const { deleteCard } = apiFetch;

  const eliminarTarjeta = async (idCard) => await deleteCard(idCard);

  return (
    <ContainerCard draggable='true' onDragStart={(e) => handleDragStart(e, id)}>
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
