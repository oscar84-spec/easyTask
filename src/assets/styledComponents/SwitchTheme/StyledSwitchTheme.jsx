import styled from "styled-components";

const ButtonTheme = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.letraDark};
  font: 14px "Telex";
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.container};
  transition: all ease-in-out 0.3s;
  @media only screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.containerHover};
    }
  }
`;

const ContainerSwitch = styled.div`
  width: 60px;
  height: 25px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 2px ${({ theme }) => theme.borderSwitch} solid;
  background-color: ${({ theme }) => theme.container};
  transition: all ease-in-out 0.3s;
`;

const SwitchCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.switchColor};
  transform: translateX(
    ${({ $theme }) => ($theme === "dark" ? "35px" : "5px")}
  );
  transition: all ease-in-out 0.3s;
`;

export const styledSwitch = { ButtonTheme, ContainerSwitch, SwitchCircle };
