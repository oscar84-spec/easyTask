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
  background-color: ${({ theme }) => theme.container};
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.icons};
    transition: all ease-in-out 0.3s;
  }
  @media only screen and (min-width: 1024px) {
    &:hover {
      background-color: ${({ theme }) => theme.containerHover};
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;
export const styledAccountMenu = { ListMenu };
