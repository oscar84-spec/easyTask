import styled from "styled-components";

const AccountAvatar = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.icons};
  color: ${({ theme }) => theme.letraLight};
  font: 500 20px "Cabin";
  cursor: pointer;
  transition: all ease-in-out 0.3s;
`;

const ContainerAccountMenu = styled.div`
  width: 280px;
  padding: 10px;
  position: absolute;
  top: 60px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.container};
  right: 10px;
  z-index: 999;
  transition: all ease-in-out 0.3s;
  @media only screen and (min-width: 768px) {
    & {
      right: 50px;
    }
  }
  @media only screen and (min-width: 1024px) {
    & {
      right: 100px;
    }
  }
`;

const ContainerSpanText = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpanText = styled.span`
  font: 500 14px "Telex";
  color: ${({ theme }) => theme.letraOpacity};
  transition: all ease-in-out 0.3s;
`;

const ButtonCloseAccount = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.container};
  border-radius: 50%;
  transition: all ease-in-out 0.3s;
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.iconClose};
    transition: all ease-in-out 0.3s;
  }
  @media only screen and (min-width: 1024px) {
    & {
      cursor: pointer;
    }
  }
`;

const ContainerAvatar = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.icons};
  color: ${({ theme }) => theme.letraLight};
  transition: all ease-in-out 0.3s;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpanName = styled.span`
  font: 14px "Telex";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
`;
const SpanEmail = styled.span`
  font: 12px "Telex";
  color: ${({ theme }) => theme.letraOpacity};
  transition: all ease-in-out 0.3s;
`;

const ButtonSesionClose = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: none;
  outline: none;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.btnPrimary};
  color: ${({ theme }) => theme.letraBlanca};
  font: 14px "Telex";
  cursor: pointer;
  transition: all ease-in-out 0.3s;
`;
export const styledHDAccountAvatar = {
  AccountAvatar,
  ContainerAccountMenu,
  ContainerSpanText,
  SpanText,
  ButtonCloseAccount,
  ContainerAvatar,
  IconAvatar,
  TextContainer,
  SpanName,
  SpanEmail,
  ButtonSesionClose,
};
