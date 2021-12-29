import { HTMLAttributes } from "react";

export type TypographyHTMLAttributes = HTMLAttributes<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
>;

export type TypographyComponent = "h1" | "h2" | "h3" | "h4" | "p" | "span";
