export const media = {
  all: "(min-width: 0px)",
  desktop: "(min-width: 51.875em)", // 830px
  tablet: "(min-width: 48em) and (max-width: 51.813em)", // 768px and 829px
  phone: "(max-width: 47.938em)", // 767px
  retina: "(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)",
};

export const typography = {
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
};

export const transitionDuration = "0.25s";

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

export const space = Space;

export const zIndex = {
  header: 100,
  panel: 100,
};

export const header = {
  height: "5rem",
  marginBottom: Space.xxl,
};
