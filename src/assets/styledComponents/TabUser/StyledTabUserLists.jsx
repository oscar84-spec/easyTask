import styled from "styled-components";

const ListContainer = styled.div`
  width: 280px;
  height: calc(100vh - 100px);
  padding: 10px;
  border: green solid;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContainerNameIcon = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListName = styled.h2`
  font: 700 1.5rem "Cabin";
  color: #273e4e;
`;

const ListIconClose = styled.i`
  svg {
    width: 20px;
    height: 20px;
    color: #273e4e;
  }
`;

const ContainerCards = styled.div`
  border: blue solid;
  padding: 5px;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const styledTabUserLists = {
  ListContainer,
  ListName,
  ContainerCards,
  ContainerNameIcon,
  ListIconClose,
};
