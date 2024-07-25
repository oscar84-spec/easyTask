import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 425px) {
    & {
      padding: 0 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    & {
      padding: 0 40px;
    }
  }
  @media only screen and (min-width: 1024px) {
    & {
      padding: 0 100px;
    }
  }
`;

const ContainerMenu = styled.div`
  border: green solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: relative;
`;
export const styledHDash = { HeaderContainer, ContainerMenu };
