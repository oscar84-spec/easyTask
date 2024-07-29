import styled from "styled-components";

const ContainerButtonAddList = styled.div`
  width: 280px;
  height: max-content;
  border: red solid;
  position: relative;
`;

const ButtonAddList = styled.button`
  width: 100%;
  height: 35px;
  border: nonre;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font: 14px "Telex";
  color: #f1f9f9;
  background-color: #273e4e;
  border-radius: 7px;
  svg {
    width: 25px;
    height: 25px;
    color: #f1f9f9;
  }
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

const FormAddList = styled.form`
  width: 100%;
  height: max-content;
  padding: 10px;
  background-color: #e2e2e2;
  border-radius: 7px;
  position: absolute;
  top: 50px;
`;

export const styledAddLists = {
  ContainerButtonAddList,
  ButtonAddList,
  FormAddList,
};
