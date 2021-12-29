import { css } from "styled-components";

export const buttonReset = () => css`
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: 0;
  transition-property: background-color, border-color, color, box-shadow;
  transition-duration: 0.25s;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none !important;
  }

  &::-moz-focus-inner {
    border: 0 !important;
  }
`;
