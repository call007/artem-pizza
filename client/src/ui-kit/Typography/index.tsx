import { forwardRef } from "react";
import { useTheme } from "styled-components";
import { useMediaProp } from "../../hooks";
import { MediaProp, TypographySize, TypographyWeight } from "../../types";
import { Theme } from "../../types/Theme";
import * as Styled from "./styles";
import { TypographyComponent, TypographyHTMLAttributes } from "./types";

export interface TypographyProps
  extends Omit<TypographyHTMLAttributes, "color"> {
  size?: TypographySize | MediaProp<TypographySize>;
  weight?: TypographyWeight;
  component?: TypographyComponent;
  color?: (color: Theme["colors"]) => string;
}

export const Typography = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement,
  TypographyProps
>(({ children, size = "base", component, color, ...restProps }, ref) => {
  const mediaSize = useMediaProp(size);
  const theme = useTheme();

  return (
    <Styled.Container
      as={component}
      size={mediaSize}
      ref={ref}
      color={color?.(theme.colors)}
      {...restProps}
    >
      {children}
    </Styled.Container>
  );
});
