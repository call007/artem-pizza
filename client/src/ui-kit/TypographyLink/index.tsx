import { PropsWithChildren } from "react";
import { PATH } from "../../consts";
import { SvgIcon, SvgSrc } from "../SvgIcon";
import { Typography, TypographyProps } from "../Typography";
import * as Styled from "./styles";

interface TypographyLinkProps extends Pick<TypographyProps, "size" | "weight"> {
  to: PATH;
  icon?: SvgSrc;
}

export function TypographyLink({
  children,
  icon,
  ...restProps
}: PropsWithChildren<TypographyLinkProps>) {
  return (
    <Typography as={Styled.Link} {...restProps}>
      {icon && (
        <Styled.Icon>
          <SvgIcon src={icon} />
        </Styled.Icon>
      )}
      {children}
    </Typography>
  );
}
