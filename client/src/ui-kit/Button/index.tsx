import { ElementType, forwardRef, MouseEvent, PropsWithChildren } from "react";
import { useHistory } from "react-router";
import { SvgIcon, SvgSrc } from "..";
import { PATH } from "../../consts";
import * as Styled from "./styles";
import { ButtonOrAnchorHTMLAttributes, ButtonSize, ButtonView } from "./types";

export interface ButtonProps extends ButtonOrAnchorHTMLAttributes {
  view?: ButtonView;
  size?: ButtonSize;
  icon?: SvgSrc;
  to?: PATH;
  isDisabled?: boolean;
}

export const Button = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  PropsWithChildren<ButtonProps>
>(
  (
    { size = "base", view = "primary", type, icon, to, children, ...restProps },
    ref
  ) => {
    const history = useHistory();

    const buttonProps: ButtonProps = {
      type: type ?? "button",
    };

    const linkProps: ButtonProps & { as: ElementType } = {
      as: "a",
      href: to,
      onClick: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        e.preventDefault();
        history.push(to!);
      },
    };

    return (
      <Styled.Container
        {...(to ? linkProps : buttonProps)}
        size={size}
        view={view}
        ref={ref}
        {...restProps}
      >
        <Styled.Wrapper>
          {icon && (
            <Styled.Icon>
              <SvgIcon src={icon} />
            </Styled.Icon>
          )}

          {children && <Styled.Text>{children}</Styled.Text>}
        </Styled.Wrapper>
      </Styled.Container>
    );
  }
);
