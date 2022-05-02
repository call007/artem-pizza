import { PropsWithChildren } from "react";
import { Typography } from "../Typography";
import logo from "./logo.svg";
import * as Styled from "./styles";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface HeaderProps {
  title?: string;
}

export function Header({ title, children }: PropsWithChildren<HeaderProps>) {
  return (
    <Styled.Container>
      {title && (
        <Styled.TitleCover>
          <Typography
            size={{ all: "xl", phone: "lg" }}
            weight="bold"
            component={Styled.Title}
          >
            {title}
          </Typography>
        </Styled.TitleCover>
      )}

      <Styled.ThemeSwitcherBox>
        <ThemeSwitcher />
      </Styled.ThemeSwitcherBox>

      {!title && <Styled.Logo src={logo} alt="Артём Пицца" />}

      {children}
    </Styled.Container>
  );
}
