import styled from "styled-components";

const SectionTabUser = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};
`;

const ContainerLists = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  padding: 0 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  background: ${({ $fondo }) =>
    `linear-gradient(90deg, ${$fondo.color1},${$fondo.color2})`};
`;
const ContainerListFlex = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  gap: 20px;
`;
export const styledTabUser = {
  SectionTabUser,
  ContainerLists,
  ContainerListFlex,
};
