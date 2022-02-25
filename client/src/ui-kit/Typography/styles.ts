import styled, { css } from "styled-components";
import { variables } from "../../styles";
import { TypographySize, TypographyWeight } from "../../types";

type ContainerProps = {
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
};

export const Container = styled.p.withConfig<ContainerProps>({
  shouldForwardProp: (prop) => !["weight", "color", "size"].includes(prop),
})(
  ({ size, weight, color }) => css`
    margin: 0;
    font-size: ${size && variables.typography.fontSize[size]};
    font-weight: ${weight && variables.typography.fontWeight[weight]};
    line-height: ${size && variables.typography.lineHeight[size]};
    color: ${color};
    transition: color ${variables.transitionDuration};
  `
);
