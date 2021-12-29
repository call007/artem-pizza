import "normalize.css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  html {
    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-width: 320px;
  }
`;
