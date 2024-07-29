import styled from "styled-components";

const SectionTabUser = styled.section`
  width: 100%;
  height: 100vh;
  border: red solid;
  background-color: #f1f9f9;
`;

const ContainerLists = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  border: blue solid;
  padding: 0 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
`;
const ContainerListFlex = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  gap: 20px;
  border: red solid;
`;
export const styledTabUser = {
  SectionTabUser,
  ContainerLists,
  ContainerListFlex,
};
