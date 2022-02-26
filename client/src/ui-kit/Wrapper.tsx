import styled from "styled-components";
import { mixins, variables } from "../styles";

type WrapperSize = "sm" | "base" | "lg";

const maxWidth: Record<WrapperSize, string> = {
  sm: "37.5rem",
  base: "55.125rem",
  lg: "60rem",
};

type WrapperProps = {
  size?: WrapperSize;
};

export const Wrapper = styled.div<WrapperProps>`
  ${mixins.fadeIn};
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: ${(props) => maxWidth[props.size ?? "base"]};
  padding-left: ${variables.space.base};
  padding-right: ${variables.space.base};
  margin-bottom: ${variables.space.xxl};
`;
