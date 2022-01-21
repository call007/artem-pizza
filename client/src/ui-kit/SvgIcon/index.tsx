import { FunctionComponent, SVGProps } from "react";
import { ReactComponent as AccountIcon } from "./icons/account.svg";
import { ReactComponent as ArrowLeftIcon } from "./icons/arrow-left.svg";
import { ReactComponent as CheckIcon } from "./icons/check.svg";
import { ReactComponent as DeliveryIcon } from "./icons/delivery.svg";
import { ReactComponent as ErrorIcon } from "./icons/error.svg";
import { ReactComponent as LogoutIcon } from "./icons/logout.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as RepeatIcon } from "./icons/repeat.svg";
import * as Styled from "./styles";

export type SvgSrc =
  | "arrow-left"
  | "check"
  | "plus"
  | "account"
  | "repeat"
  | "delivery"
  | "error"
  | "logout";

export interface SvgIconProps {
  src: SvgSrc;
  size?: number;
}

const icons: {
  [key in SvgSrc]: FunctionComponent<SVGProps<SVGSVGElement>>;
} = {
  "arrow-left": ArrowLeftIcon,
  check: CheckIcon,
  plus: PlusIcon,
  account: AccountIcon,
  repeat: RepeatIcon,
  delivery: DeliveryIcon,
  error: ErrorIcon,
  logout: LogoutIcon,
};

export function SvgIcon({ size = 16, src, ...restProps }: SvgIconProps) {
  return (
    <Styled.Container
      size={size}
      viewBox={`0 0 ${size} ${size}`}
      as={icons[src]}
      aria-hidden="true"
      {...restProps}
    />
  );
}
