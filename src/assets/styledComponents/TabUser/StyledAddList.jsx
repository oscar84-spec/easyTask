import styled from "styled-components";

const ContainerButtonAddList = styled.div`
  width: 280px;
  height: max-content;
  position: relative;
  margin-top: 20px;
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
  color: ${({ theme }) => theme.letraBlanca};
  background-color: ${({ theme }) => theme.btnPrimary};
  border: none;
  outline: none;
  border-radius: 7px;
  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.letraBlanca};
  }
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

const FormAddList = styled.form`
  width: 100%;
  height: max-content;
  padding: 10px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 7px;
  position: absolute;
  top: 50px;
`;

export const styledAddLists = {
  ContainerButtonAddList,
  ButtonAddList,
  FormAddList,
};
