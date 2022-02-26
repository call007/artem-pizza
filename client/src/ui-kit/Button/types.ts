import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
} from "react";
import { Breakpoints } from "../../types";

export type ButtonView = "primary" | "secondary" | "ghost";
export type ButtonSize = "base" | "large";

export type ButtonOrAnchorHTMLAttributes =
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export type Templates = Record<
  Extract<Breakpoints, "all" | "phone">,
  {
    [key in ButtonSize]: Pick<CSSProperties, "height" | "padding" | "fontSize">;
  }
>;
