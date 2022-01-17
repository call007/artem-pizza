import styled from "styled-components";

type ContainerProps = {
  isVisible: boolean;
};

export const Container = styled.div<ContainerProps>`
  animation-fill-mode: forwards;
  animation-duration: ${(props) => props.theme.transitionDuration};
  animation-name: ${(props) => !props.isVisible && "fade-out"};

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }
`;
