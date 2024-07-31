import styled from "styled-components";

const ContainerColors = styled.label`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

const InputCard = styled.input``;

const ColorsCard = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ $bgColor }) => $bgColor};
`;

const SpanName = styled.span`
  font: 14px "Telex";
  color: ${({ theme }) => theme.letraDark};
`;
export const styledColorsCards = {
  ContainerColors,
  InputCard,
  ColorsCard,
  SpanName,
};
