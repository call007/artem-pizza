const lightColors = {
  white: "#fff",
  button: "#fff",
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
};

export const darkColors = {
  white: "#282c2d",
  button: "#fff",
  black: "#f2f5f7",
  primary: "#00A896",
  primaryDark: "#009485",
  secondary: "#F3752B",
  secondaryLight: "#F79D5C",
  gray600: "#a9b5c2",
  gray400: "#737b85",
  gray200: "#3b4040",
  gray100: "#313738",
  statusSuccess: "#00A896",
  statusError: "#f2777a",
  specBg: "#FF00FF",
};

const lightShadow = {
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
};

const darkShadow = {
  outer: {
    sm: "0 0.188rem 0.25rem rgba(0, 0, 0, 0.05), 0 0 0.125rem rgba(0, 0, 0, 0.2), inset 0 0 0 transparent",
    md: "0 0.188rem 0.25rem rgba(0, 0, 0, 0.25), 0 0 0.125rem rgba(0, 0, 0, 0.7), inset 0 0 0 transparent",
    lg: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
    panel: "0 -1rem 2rem rgba(0, 0, 0, 0.2), 0 0 .25rem rgba(0, 0, 0, 0.4)",
  },
  inner: {
    sm: "0 0 0 transparent, 0 0 0 transparent, inset 0 .125rem .125rem rgba(0, 0, 0, 0.3)",
  },
};

export const lightTheme = {
  colors: lightColors,
  shadow: lightShadow,
};

export const darkTheme = {
  colors: darkColors,
  shadow: darkShadow,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
