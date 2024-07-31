import styled from "styled-components";

const Icon = styled.i`
  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.headerIcon};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
`;
const ContainerMenu = styled.div`
  width: 280px;
  padding: 10px;
  position: absolute;
  top: 50px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 7px;
  z-index: 999;
  transition: all ease-in-out 0.3s;
`;

const ButtonClose = styled.button`
  margin-left: 85%;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.container};
  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.iconClose};
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }
  transition: all ease-in-out 0.3s;
`;

const SpanText = styled.span`
  display: inline-block;
  margin-top: 10px;
  margin-left: 10px;
  font: 14px "Telex";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
`;

const AplicacionesContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
export const styledHDMenu = {
  Icon,
  ContainerMenu,
  ButtonClose,
  SpanText,
  AplicacionesContainer,
};
