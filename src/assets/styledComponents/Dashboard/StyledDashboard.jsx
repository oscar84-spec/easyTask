import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};
  transition: all ease-in-out 0.3s;
  position: relative;
`;

export const styledDashboard = { SectionContainer };
