import styled from "styled-components";
import { variables } from "../../../../styles";

type ContainerProps = {
  isVisible: boolean;
};

export const Container = styled.div<ContainerProps>`
  animation-fill-mode: forwards;
  animation-duration: ${variables.transitionDuration};
  animation-name: ${(props) => !props.isVisible && "fade-out"};

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }
`;
