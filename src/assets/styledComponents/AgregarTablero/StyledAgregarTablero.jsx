import styled from "styled-components";

const ContainerAgregar = styled.form`
  width: 280px;
  height: max-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.container};
  transition: all ease-in-out 0.3s;
  position: absolute;
  top: 150px;
  left: 20px;
  z-index: 999;
  @media only screen and (min-width: 375px) {
    left: 50px;
  }
  @media only screen and (min-width: 768px) {
    left: 230px;
  }
  @media only screen and (min-width: 1024px) {
    top: 200px;
    left: 300px;
  }
  @media only screen and (min-width: 1244px) {
    left: 400px;
  }
`;

const SpanTitle = styled.span`
  font: 1rem "Laila";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
  text-align: center;
`;

const ContainerBg = styled.div`
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const ButtonAgregar = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.btnPrimary};
  color: ${({ theme }) => theme.letraBlanca};
  transition: all ease-in-out 0.3s;
  border-radius: 7px;
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;
const ButtonCancelar = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.btnSecondary};
  color: ${({ theme }) => theme.letraDark};
  border-radius: 7px;
  transition: all ease-in-out 0.3s;
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;
export const styledAgregarTablero = {
  ContainerAgregar,
  SpanTitle,
  ContainerBg,
  ContainerButtons,
  ButtonAgregar,
  ButtonCancelar,
};
