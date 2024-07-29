import styled from "styled-components";

const ContainerAddCard = styled.div`
  width: 100%;
  height: max-content;
  border: red solid;
  position: relative;
`;

const ButtonAddCards = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 7px;
  background-color: #273e4e;
  color: #f1f9f9;
  font: 14px "Telex";
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
    color: #f1f9f9;
  }
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

const ContainerBg = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const styledTabUserCards = {
  ContainerAddCard,
  ButtonAddCards,
  ContainerBg,
};
