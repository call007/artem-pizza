// type Shadow = "sm" | "md";
// type Colors =
//   | "white"
//   | "black"
//   | "primary"
//   | "primaryDark"
//   | "secondary"
//   | "secondaryLight"
//   | "gray600"
//   | "gray400"
//   | "gray200"
//   | "gray100"
//   | "statusSuccess"
//   | "statusError"
//   | "specBg";

// type Theme = {
//   colors: Record<Colors, string>;
//   shadow: {
//     outer: { [key in Shadow]?: string };
//     inner: { [key in Shadow]?: string };
//   };
//   media: { [key in Exclude<Breakpoints, "all">]: string };
//   typography: {
//     fontSize: Record<TypographySize, string>;
//     lineHeight: Record<TypographySize, number>;
//     fontWeight: Record<TypographyWeight, number>;
//   };
//   transitionDuration: string;
//   space: Record<Space, number>;
// };

export enum Space {
  /**2px */
  xxxs = ".125rem",
  /** 4px */
  xxs = ".25rem",
  /** 8px */
  xs = ".5rem",
  /** 10px */
  s = ".625rem",
  /** 12px */
  sm = ".75rem",
  /** 16px */
  base = "1rem",
  /** 18px */
  lg = "1.125rem",
  /** 24px */
  xl = "1.5rem",
  /** 32px */
  "xxl" = "2rem",
}

// colors: {
//   white: "#0e141b",
//   black: "#f2f5f7",
//   primary: "#00A896",
//   primaryDark: "#009485",
//   secondary: "#F3752B",
//   secondaryLight: "#F79D5C",
//   gray600: "#9ca8b4",
//   gray400: "#606e7c",
//   gray200: "#2b333b",
//   gray100: "#1e262f",
//   statusSuccess: "#00A896",
//   statusError: "#E3170A",
//   specBg: "#FF00FF",
// },

export const theme = {
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
      lg: "0 0.5rem 1rem rgba(75, 75, 124, 0.05)",
      panel:
        "0 -1rem 2rem rgba(75, 75, 124, 0.05), 0 0 .25rem rgba(75, 75, 124, 0.1)",
    },
    inner: {
      sm: "0 0 0 transparent, 0 0 0 transparent, inset 0 .125rem .125rem rgba(20, 20, 55, 0.1)",
    },
  },

  media: {
    all: "(min-width: 0px)",
    desktop: "(min-width: 62.5rem)", // 1000px
    tablet: "(max-width: 62.438rem)", // 999px
    phone: "(max-width: 47.938rem)", // 767px
    retina: "(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)",
  },

  typography: {
    fontSize: {
      base: "1rem",
      xs: "0.75rem",
      sm: "0.875rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "1.75rem",
    },
    lineHeight: {
      base: 1.5,
      xs: 1.5,
      sm: 1.43,
      lg: 1.2,
      xl: 1.33,
      xxl: 1.29,
    },
    fontWeight: {
      bold: 800,
      medium: 600,
      normal: 400,
    },
  },

  transitionDuration: "0.25s",

  space: Space,

  zIndex: {
    header: 100,
    panel: 100,
  },

  header: {
    height: "5rem",
    marginBottom: Space.xxl,
  },
};
