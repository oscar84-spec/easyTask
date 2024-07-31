import styled from "styled-components";

const ContainerBienvenida = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

const SpanTitle = styled.h2`
  font: 1.5rem "Cabin";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
`;

const SpanText = styled.span`
  font: 0.875rem "Telex";
  color: ${({ theme }) => theme.letraOpacity};
  transition: all ease-in-out 0.3s;
`;

export const styledTabbienvenida = { ContainerBienvenida, SpanTitle, SpanText };
