import styled, { css } from "styled-components";
import { TypographySize, TypographyWeight } from "../../types";

type ContainerProps = {
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: string;
};

export const Container = styled.p.withConfig<ContainerProps>({
  shouldForwardProp: (prop) => !["weight", "color", "size"].includes(prop),
})(
  ({ theme, size, weight, color }) => css`
    margin: 0;
    font-size: ${size && theme.typography.fontSize[size]};
    font-weight: ${weight && theme.typography.fontWeight[weight]};
    line-height: ${size && theme.typography.lineHeight[size]};
    color: ${color};
  `
);
