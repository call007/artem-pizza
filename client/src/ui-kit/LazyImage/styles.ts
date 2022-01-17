import styled from "styled-components";

export const Image = styled.img`
  &.lazyload,
  &.lazyloading {
    opacity: 0;
  }

  &.lazyloaded {
    opacity: 1;
    transition: opacity ${(props) => props.theme.transitionDuration};
  }
`;
