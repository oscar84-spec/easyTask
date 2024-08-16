import styled from "styled-components";

const ContainerCard = styled.div`
  width: 100%;
  height: max-content;
  padding: 5px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.containerHover};
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
  color: ${({ theme }) => theme.letraDark};
`;

const CardIcon = styled.i`
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.iconClose};
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
  color: ${({ theme }) => theme.letraDark};
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
