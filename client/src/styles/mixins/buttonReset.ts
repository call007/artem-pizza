import { css } from "styled-components";
import { variables } from "..";

export const buttonReset = () => css`
  appearance: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: 0;
  transition-property: background-color, border-color, color, box-shadow;
  transition-duration: ${variables.transitionDuration};
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none !important;
  }

  &::-moz-focus-inner {
    border: 0 !important;
  }
`;
