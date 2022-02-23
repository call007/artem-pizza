const lightColors = {
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
};

export const darkColors = {
  white: "#0e141b",
  black: "#f2f5f7",
  primary: "#00A896",
  primaryDark: "#009485",
  secondary: "#F3752B",
  secondaryLight: "#F79D5C",
  gray600: "#9ca8b4",
  gray400: "#606e7c",
  gray200: "#2b333b",
  gray100: "#1e262f",
  statusSuccess: "#00A896",
  statusError: "#E3170A",
  specBg: "#FF00FF",
};

export const theme = {
  colors: lightColors,
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
};
