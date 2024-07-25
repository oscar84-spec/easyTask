import styled from "styled-components";

const ListMenu = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  font: 14px "Telex";
  background-color: #e2e2e2;
  color: #191a1a;
  svg {
    width: 15px;
    height: 15px;
    color: #273e4e;
  }
  @media only screen and (min-width: 1024px) {
    &:hover {
      background-color: #d3d3d3;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;

export const styledAplicaciones = { ListMenu };
