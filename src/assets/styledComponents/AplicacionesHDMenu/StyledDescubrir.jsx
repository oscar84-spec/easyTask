import styled from "styled-components";

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #e2e2e2;
  border-radius: 7px;
  padding: 0 10px;
  @media only screen and (min-width: 1024px) {
    &:hover {
      background-color: #d3d3d3;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
    }
  }
`;

const ContainerIcon = styled.span`
  svg {
    width: 15px;
    height: 15px;
    color: #273e4e;
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
  color: #191a1a;
`;

const AppDescription = styled.span`
  font: 12px "Telex";
  color: #6d6d6d;
`;

export const styledDescubrir = {
  ContainerApp,
  ContainerIcon,
  ContainerText,
  AppName,
  AppDescription,
};
