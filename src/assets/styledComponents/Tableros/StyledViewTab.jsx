import styled from "styled-components";

const ContainerViewTab = styled.div`
  width: 100%;
  padding: 10px;
  height: max-content;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
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
  background: ${({ $fondo }) =>
    `linear-gradient(90deg, ${$fondo.color1}, ${$fondo.color2})`};
  border-radius: 7px;
`;

const TabOverlay = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 500 14px "Laila";
  color: #f1f9f9;
  position: relative;
  &:hover {
    cursor: pointer;
    color: #191a1a;
    background-color: transparent;
    transition: all ease-in-out 0.3s;
  }
`;

const TabIcon = styled.i`
  position: absolute;
  top: -10px;
  right: -10px;
  svg {
    width: 25px;
    height: 25px;
    color: #273e4e;
  }
  @media only screen and (min-width: 1024px) {
    svg:hover {
      cursor: pointer;
      color: crimson;
      transition: all ease-in-out 0.3s;
    }
  }
`;

const Container = styled.div`
  width: 130px;
  height: 100px;
  border-radius: 7px;
  position: relative;
`;

const ContainerNotTab = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SpanText = styled.span`
  font: 14px "Telex";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
`;

const NotTabImg = styled.div`
  width: 100%;
  height: 300px;
  background: url(${({ $theme }) =>
      $theme === "dark" ? "/emptyDark.svg" : "/emptyLigth.svg"})
    center / contain no-repeat;
  transition: all ease-in-out 0.3s;
`;
export const styledViewTab = {
  ContainerViewTab,
  TabItem,
  TabOverlay,
  TabIcon,
  Container,
  ContainerNotTab,
  SpanText,
  NotTabImg,
};
