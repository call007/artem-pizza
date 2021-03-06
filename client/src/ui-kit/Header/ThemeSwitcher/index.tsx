import { useThemeContext } from "../../../context";
import * as Styled from "./styles";
import { ReactComponent as Sunbeams } from "./sunbeams.svg";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Styled.Container
      type="button"
      title={`Переключить на ${theme === "light" ? "тёмную" : "светлую"} тему`}
      aria-label={theme}
      aria-live="polite"
      onClick={toggleTheme}
    >
      <Styled.Sun themeName={theme}>
        <Styled.Moon themeName={theme} />
      </Styled.Sun>

      <Styled.Sunbeams themeName={theme}>
        <Sunbeams aria-hidden="true" width="100%" height="100%" />
      </Styled.Sunbeams>
    </Styled.Container>
  );
}
