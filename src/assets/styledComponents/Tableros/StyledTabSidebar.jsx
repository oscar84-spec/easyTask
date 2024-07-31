import styled from "styled-components";

const ContainerAd = styled.div`
  width: 100%;
  height: max-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.container};
  transition: all ease-in-out 0.3s;
`;

const SpanText = styled.span`
  font: 14px "Laila";
  color: ${({ theme }) => theme.letraDark};
  transition: all ease-in-out 0.3s;
`;

const SpanDesc = styled.p`
  font: 13px "Telex";
  color: ${({ theme }) => theme.letraOpacity};
`;

const LinkText = styled.span`
  font: 14px "Telex";
  color: ${({ theme }) => theme.containerLink};
  text-decoration: underline;
  transition: all ease-in-out 0.3s;
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const styledSidebar = { ContainerAd, SpanText, SpanDesc, LinkText };
