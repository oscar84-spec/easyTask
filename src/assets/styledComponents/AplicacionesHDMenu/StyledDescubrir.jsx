import styled from "styled-components";

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 7px;
  padding: 0 10px;
  transition: all ease-in-out 0.3s;
  @media only screen and (min-width: 1024px) {
    &:hover {
      background-color: ${({ theme }) => theme.containerHover};
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;

const ContainerIcon = styled.span`
  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.icons};
    transition: all ease-in-out 0.3s;
  }
`;
const ContainerText = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AppName = styled.span`
  font: 14px "Telex";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
`;

const AppDescription = styled.span`
  font: 12px "Telex";
  color: ${({ theme }) => theme.letraOpacity};
  transition: all ease-in-out 0.3s;
`;

export const styledDescubrir = {
  ContainerApp,
  ContainerIcon,
  ContainerText,
  AppName,
  AppDescription,
};
