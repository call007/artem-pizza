import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Themes } from "../types";

const ThemeContext = createContext(
  {} as { theme: Themes; toggleTheme: () => void }
);

export function ThemeContextProvider(props: PropsWithChildren<unknown>) {
  const [theme, setTheme] = useState<Themes>(() => {
    const localTheme = window.localStorage.getItem("theme") as Themes;

    if (localTheme) {
      return localTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const setMode = (mode: Themes) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleChangePrefersColorScheme = ({
      matches: isDark,
    }: MediaQueryListEvent) => {
      setMode(isDark ? "dark" : "light");
    };

    const windowPrefersColorSchemeMedia = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    windowPrefersColorSchemeMedia.addEventListener(
      "change",
      handleChangePrefersColorScheme
    );

    return () => {
      windowPrefersColorSchemeMedia.removeEventListener(
        "change",
        handleChangePrefersColorScheme
      );
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
