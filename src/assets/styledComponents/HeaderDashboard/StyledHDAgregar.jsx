import styled from "styled-components";

const IconAgregar = styled.i`
  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.icons};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
`;
const ContainerMenu = styled.div`
  width: 280px;
  padding: 10px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 7px;
  position: absolute;
  top: 50px;
  transform: translateX(10px);
  transition: all ease-in-out 0.3s;
  z-index: 999;
  @media only screen and (min-width: 768px) {
    & {
      right: 0;
    }
  }
`;

const ButtonAdd = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.container};
  border: none;
  outline: none;
  border-radius: 5px;
  text-align: start;
  padding: 5px;
  transition: all ease-in-out 0.3s;
  @media only screen and (min-width: 1024px) {
    &:hover {
      background-color: ${({ theme }) => theme.containerHover};
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;

const SpanAdd = styled.span`
  display: flex;
  gap: 10px;
  font: 14px "Telex";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.icons};
    transition: all ease-in-out 0.3s;
  }
`;

const SpanDescription = styled.span`
  font: 12px "Telex";
  color: ${({ theme }) => theme.letraOpacity};
`;
export const styledHDAgregar = {
  IconAgregar,
  ContainerMenu,
  ButtonAdd,
  SpanAdd,
  SpanDescription,
};
