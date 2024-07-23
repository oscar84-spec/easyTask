import styled from "styled-components";

const HeaderLogo = styled.div`
  width: 150px;
  height: 30px;
  background: url(${({ $pathLogo }) => $pathLogo}) center / contain no-repeat;
`;

export const stylesHLogo = { HeaderLogo };
