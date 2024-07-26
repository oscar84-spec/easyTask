import styled from "styled-components";

const ContainerViewTab = styled.div`
  width: 100%;
  padding: 10px;
  height: max-content;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    & {
      width: 300px;
    }
  }
  @media only screen and (min-width: 1024px) {
    & {
      width: 100%;
    }
  }
`;

const TabItem = styled.div`
  width: 130px;
  height: 100px;
  margin-bottom: 20px;
  background-color: #e2e2e2;
  border-radius: 7px;
  border: red solid;
`;
export const styledViewTab = { ContainerViewTab, TabItem };
