import styled from "styled-components";

const ColorsLabel = styled.label`
  display: block;
  margin: 10px 0;
`;

const ColorsInput = styled.input`
  display: none;
`;

const ColorsDiv = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ $color1, $color2 }) =>
    `linear-gradient(90deg, ${$color1}, ${$color2})`};
  cursor: pointer;
  border: 2px solid #000;
`;

export const styledColors = { ColorsLabel, ColorsInput, ColorsDiv };
