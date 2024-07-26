import styled from "styled-components";

const TableroContainer = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  border: blue solid;
  @media only screen and (min-width: 425px) {
    & {
      padding: 0 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    & {
      display: flex;
      gap: 20px;
      padding: 0 40px;
    }
  }
  @media only screen and (min-width: 1024px) {
    & {
      padding: 0 100px;
    }
  }
  @media only screen and (min-width: 1244px) {
    & {
      gap: 200px;
    }
  }
`;

const ContainerSidebar = styled.div`
  border: green solid;
  width: 300px;
  height: max-content;
  margin-top: 20px;
  padding: 10px;
  border-radius: 7px;
  background-color: #e2e2e2;
  display: none;
  @media only screen and (min-width: 768px) {
    & {
      display: block;
      width: 200px;
    }
  }
`;

const ContainerTab = styled.div`
  width: 100%;
  height: max-content;
  padding: 10px;
  margin-top: 20px;
  border-radius: 7px;
  @media only screen and (min-width: 768px) {
    & {
      width: 400px;
    }
  }
  @media only screen and (min-width: 1024px) {
    & {
      width: 500px;
    }
  }
`;
export const styledTableros = {
  TableroContainer,
  ContainerSidebar,
  ContainerTab,
};
