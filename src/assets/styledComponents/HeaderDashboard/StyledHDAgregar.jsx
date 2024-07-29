import styled from "styled-components";

const IconAgregar = styled.i`
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
  background-color: #e2e2e2;
  border-radius: 7px;
  position: absolute;
  top: 50px;
  transform: translateX(10px);
  z-index: 999;
  @media only screen and (min-width: 768px) {
    & {
      right: 0;
    }
  }
`;

const ButtonAdd = styled.button`
  width: 100%;
  background-color: #e2e2e2;
  border: none;
  outline: none;
  border-radius: 5px;
  text-align: start;
  padding: 5px;
  @media only screen and (min-width: 1024px) {
    &:hover {
      background-color: #d3d3d3;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;

const SpanAdd = styled.span`
  display: flex;
  gap: 10px;
  font: 14px "Telex";
  color: #191a1a;
  svg {
    width: 15px;
    height: 15px;
    color: #273e4e;
  }
`;

const SpanDescription = styled.span`
  font: 12px "Telex";
  color: #6d6d6d;
`;
export const styledHDAgregar = {
  IconAgregar,
  ContainerMenu,
  ButtonAdd,
  SpanAdd,
  SpanDescription,
};
