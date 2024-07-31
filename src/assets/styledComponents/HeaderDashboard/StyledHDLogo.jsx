import styled from "styled-components";

const Logo = styled.div`
  width: 150px;
  height: 30px;
  background: url(${({ $theme }) =>
      $theme === "dark" ? "/logoDashDark.svg" : "/logoDashLight.svg"})
    center/contain no-repeat;
  transition: all ease-in-out 0.3s;
`;
export const stylesHDLogo = { Logo };
