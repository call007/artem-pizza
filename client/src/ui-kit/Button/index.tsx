import { ElementType, forwardRef, MouseEvent } from "react";
import { useHistory } from "react-router";
import { SvgIcon } from "..";
import { PATH } from "../../consts";
import { SvgSrc } from "../SvgIcon";
import * as Styled from "./styles";
import { ButtonOrAnchorHTMLAttributes, ButtonSize, ButtonView } from "./types";

export interface ButtonProps extends ButtonOrAnchorHTMLAttributes {
  view?: ButtonView;
  size?: ButtonSize;
  icon?: SvgSrc;
  to?: PATH;
  isDisabled?: boolean;
  isLoading?: boolean;
  isLong?: boolean;
}

export const Button = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    size = "base",
    view = "primary",
    type,
    icon,
    to,
    children,
    ...restProps
  } = props;

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
      disabled={!to && (props.isDisabled ?? props.isLoading)}
      {...restProps}
    >
      <Styled.Wrapper>
        {props.isLoading ? (
          <>
            <Styled.Preloader>
              <Styled.PreloaderItem />
              <Styled.PreloaderItem />
              <Styled.PreloaderItem />
              <Styled.PreloaderItem />
            </Styled.Preloader>
          </>
        ) : (
          <>
            {icon && (
              <Styled.Icon>
                <SvgIcon src={icon} />
              </Styled.Icon>
            )}
            {children && <Styled.Text>{children}</Styled.Text>}
          </>
        )}
      </Styled.Wrapper>
    </Styled.Container>
  );
});
