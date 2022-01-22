import { css, keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
`;

export const fadeIn = () => css`
  animation: ${fadeInAnimation} ${(props) => props.theme.transitionDuration}
    forwards;
`;
