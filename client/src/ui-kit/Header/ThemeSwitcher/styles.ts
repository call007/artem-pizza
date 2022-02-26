import styled, { css } from "styled-components";
import { mixins, variables } from "../../../styles";

export const Container = styled.button`
  ${mixins.buttonReset};
  position: relative;
  vertical-align: middle;
  width: 1.5rem;
  height: 1.5rem;
  color: ${(props) => props.theme.colors.gray600};

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

const icon = css`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition-property: background-color, opacity, transform;
  transition-duration: ${variables.transitionDuration};

  svg {
    fill: currentColor;
  }
`;

type SunProps = {
  themeName: "light" | "dark";
};

export const Sun = styled.span<SunProps>`
  ${icon};
  background-color: currentColor;
  border-radius: 50%;
  transform: ${(props) =>
    props.themeName === "dark" ? "scale(0.8)" : "scale(0.55)"};
`;

export const Sunbeams = styled.span<SunProps>`
  ${icon};
  background-color: transparent;
  transform: ${(props) =>
    props.themeName === "dark" ? "rotate(65deg)" : "rotate(0deg)"};
  opacity: ${(props) => (props.themeName === "dark" ? 0 : 1)};
`;

export const Moon = styled.span<SunProps>`
  ${icon};
  left: 100%;
  top: -50%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  transform: ${(props) =>
    props.themeName === "dark" ? "translate(-70%, 20%)" : "translate(0, 0)"};
`;
