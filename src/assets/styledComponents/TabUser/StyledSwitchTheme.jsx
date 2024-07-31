import styled from "styled-components";

const ContainerSwitchTheme = styled.div`
  width: 60px;
  height: 25px;
  border: 2px ${({ theme }) => theme.borderSwitch} solid;
  border-radius: 20px;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
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
export const styledSwitch = { ContainerSwitchTheme, SwitchCircle };
