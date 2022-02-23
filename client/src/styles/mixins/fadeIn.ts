import { css, keyframes } from "styled-components";
import { variables } from "..";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
`;

export const fadeIn = () => css`
  animation: ${fadeInAnimation} ${variables.transitionDuration} forwards;
`;
