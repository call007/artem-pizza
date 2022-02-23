import styled from "styled-components";
import { variables } from "../../styles";

export const Image = styled.img`
  &.lazyload,
  &.lazyloading {
    opacity: 0;
  }

  &.lazyloaded {
    opacity: 1;
    transition: opacity ${variables.transitionDuration};
  }
`;
