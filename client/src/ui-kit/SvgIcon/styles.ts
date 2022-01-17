import styled from "styled-components";

type ContainerProps = {
  size: number;
};

export const Container = styled.svg<ContainerProps>`
  flex-shrink: 0;
  vertical-align: middle;
  width: ${(props) => `${props.size / 16}rem`};
  height: ${(props) => `${props.size / 16}rem`};
  fill: currentColor;
`;
