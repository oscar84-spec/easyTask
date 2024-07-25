import styled from "styled-components";

const ButtonTheme = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #191a1a;
  font: 14px "Telex";
  border: none;
  outline: none;
  background-color: #e2e2e2;
  @media only screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      background-color: #d3d3d3;
    }
  }
`;

const ContainerSwitch = styled.div`
  width: 60px;
  height: 25px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 2px #8d8d8d solid;
  background-color: #e2e2e2;
  transition: all ease-in-out 0.3s;
`;

const SwitchCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #273e4e;
  transform: translateX(5px);
`;

export const styledSwitch = { ButtonTheme, ContainerSwitch, SwitchCircle };
