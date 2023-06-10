import { useTheme } from "styled-components";
import { useMediaProp } from "../../hooks";
import { MediaProp, TypographySize, TypographyWeight } from "../../types";
import { Theme } from "../../types/Theme";
import * as Styled from "./styles";
import { TypographyHTMLAttributes } from "./types";

export interface TypographyProps
  extends Omit<TypographyHTMLAttributes, "color"> {
  size?: TypographySize | MediaProp<TypographySize>;
  weight?: TypographyWeight;
  component?: any;
  as?: any;
  color?: (color: Theme["colors"]) => string;
}

export function Typography({
  children,
  size = "base",
  component,
  as,
  color,
  ...restProps
}: TypographyProps) {
  const mediaSize = useMediaProp(size);
  const theme = useTheme();

  return (
    <Styled.Container
      as={component ?? as}
      size={mediaSize}
      color={color?.(theme.colors)}
      {...restProps}
    >
      {children}
    </Styled.Container>
  );
}
