import styled from "styled-components";

const ContainerBienvenida = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

const SpanTitle = styled.h2`
  font: 1.5rem "Cabin";
  color: #273e4e;
`;

const SpanText = styled.span`
  font: 0.875rem "Telex";
  color: #6d6d6d;
`;

export const styledTabbienvenida = { ContainerBienvenida, SpanTitle, SpanText };
