import { Breakpoints, TypographySize, TypographyWeight } from "../types";

type Shadow = "sm" | "md";
type Colors =
  | "white"
  | "black"
  | "primary"
  | "primaryDark"
  | "secondary"
  | "secondaryLight"
  | "gray600"
  | "gray400"
  | "gray200"
  | "gray100"
  | "statusSuccess"
  | "statusError"
  | "specBg";

type Theme = {
  colors: { [key in Colors]: string };
  shadow: {
    outer: { [key in Shadow]?: string };
    inner: { [key in Shadow]?: string };
  };
  media: { [key in Exclude<Breakpoints, "all">]: string };
  typography: {
    fontSize: { [key in TypographySize]: string };
    lineHeight: { [key in TypographySize]: number };
    fontWeight: { [key in TypographyWeight]: number };
  };
};

export const theme: Theme = {
  colors: {
    white: "#fff",
    black: "#1F1F33",
    primary: "#00A896",
    primaryDark: "#009485",
    secondary: "#F3752B",
    secondaryLight: "#F79D5C",
    gray600: "#4B4B7C",
    gray400: "#8181B1",
    gray200: "#E1E1ED",
    gray100: "#F9F9FB",
    statusSuccess: "#00A896",
    statusError: "#E3170A",
    specBg: "#FF00FF",
  },

  shadow: {
    outer: {
      sm: "0 0.188rem 0.25rem rgba(75, 75, 124, 0.05), 0 0 0.125rem rgba(75, 75, 124, 0.2), inset 0 0 0 transparent",
      md: "0 0.188rem 0.25rem rgba(46, 49, 55, 0.05), 0 0 0.125rem rgba(46, 49, 55, 0.15), inset 0 0 0 transparent",
    },
    inner: {
      sm: "0 0 0 transparent, 0 0 0 transparent, inset 0 .125rem .125rem rgba(20, 20, 55, 0.1)",
    },
  },

  media: {
    desktop: "(min-width: 62.5rem)", // 1000px
    tablet: "(max-width: 62.438rem)", // 999px
    phone: "(max-width: 47.938rem)", // 767px
  },

  typography: {
    fontSize: {
      base: "1rem",
      xs: "0.75rem",
      sm: "0.875rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
    },
    lineHeight: {
      base: 1.5,
      xs: 1.5,
      sm: 1.43,
      lg: 1.2,
      xl: 1.33,
      "2xl": 1.29,
    },
    fontWeight: {
      bold: 800,
      medium: 600,
      normal: 400,
    },
  },
};
