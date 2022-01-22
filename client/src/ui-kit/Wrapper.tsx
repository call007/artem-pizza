import styled, { css } from "styled-components";

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
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  ${(props) => css`
    max-width: ${maxWidth[props.size ?? "base"]};
    padding-left: ${props.theme.space.base};
    padding-right: ${props.theme.space.base};
    margin-bottom: ${props.theme.space.xxl};
  `};
`;
