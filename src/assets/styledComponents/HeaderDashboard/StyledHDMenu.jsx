import styled from "styled-components";

const Icon = styled.i`
  svg {
    width: 25px;
    height: 25px;
    color: #273e4e;
    cursor: pointer;
  }
`;
const ContainerMenu = styled.div`
  width: 280px;
  padding: 10px;
  position: absolute;
  top: 50px;
  background-color: #e2e2e2;
  border-radius: 7px;
  z-index: 999;
`;

const ButtonClose = styled.button`
  margin-left: 85%;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: #e2e2e2;
  svg {
    width: 25px;
    height: 25px;
    color: #273e4e;
    cursor: pointer;
  }
`;

const SpanText = styled.span`
  display: inline-block;
  margin-top: 10px;
  margin-left: 10px;
  font: 14px "Telex";
  color: #191a1a;
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
