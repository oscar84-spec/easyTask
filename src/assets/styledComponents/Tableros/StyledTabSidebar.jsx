import styled from "styled-components";

const ContainerAd = styled.div`
  width: 100%;
  height: max-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SpanText = styled.span`
  font: 14px "Laila";
  color: #191a1a;
`;

const SpanDesc = styled.p`
  font: 13px "Telex";
  color: #6d6d6d;
`;

const LinkText = styled.span`
  font: 14px "Telex";
  color: #273e4e;
  text-decoration: underline;
  @media only screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

export const styledSidebar = { ContainerAd, SpanText, SpanDesc, LinkText };
