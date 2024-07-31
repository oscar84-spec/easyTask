import styled from "styled-components";

const ContainerList = styled.ul`
  display: none;
  @media only screen and (min-width: 768px) {
    & {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }
`;
const ListItem = styled.li`
  font: 14px "Telex";
  color: ${({ theme }) => theme.letraBlanca};
  transition: all ease-in-out 0.3s;
  @media only screen and (min-width: 1024px) {
    &:hover {
      color: ${({ theme }) => theme.letraHover};
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;

export const styledHDNavbar = { ContainerList, ListItem };
