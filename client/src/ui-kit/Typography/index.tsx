import { forwardRef, PropsWithChildren } from "react";
import { useMediaProp } from "../../hooks";
import { MediaProp, TypographySize, TypographyWeight } from "../../types";
import * as Styled from "./styles";
import { TypographyComponent, TypographyHTMLAttributes } from "./types";

export interface TypographyProps extends TypographyHTMLAttributes {
  size?: TypographySize | MediaProp<TypographySize>;
  weight?: TypographyWeight;
  component?: TypographyComponent;
}

export const Typography = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement,
  PropsWithChildren<TypographyProps>
>(({ children, size = "base", component, ...restProps }, ref) => {
  const mediaSize = useMediaProp(size);

  return (
    <Styled.Container as={component} size={mediaSize} ref={ref} {...restProps}>
      {children}
    </Styled.Container>
  );
});
