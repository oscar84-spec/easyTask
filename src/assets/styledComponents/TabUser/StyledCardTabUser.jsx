import styled from "styled-components";

const ContainerCard = styled.div`
  width: 100%;
  height: max-content;
  padding: 5px;
  border-radius: 7px;
  background-color: #e2e2e2;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContainerNameIcon = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameCard = styled.span`
  font: 20px "Cabin";
  color: #191a1a;
`;

const CardIcon = styled.i`
  svg {
    width: 20px;
    height: 20px;
    color: #273e4e;
  }
`;

const ContainerDesc = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TagColor = styled.div`
  width: 50px;
  height: 10px;
  background-color: ${({ $color }) => $color.bgColor};
  border-radius: 10px;
`;

const CardDesc = styled.span`
  font: 14px "Telex";
  color: #191a1a;
`;

export const styledCardUser = {
  ContainerCard,
  ContainerNameIcon,
  NameCard,
  CardIcon,
  ContainerDesc,
  TagColor,
  CardDesc,
};
