import { PropsWithChildren } from "react";
import { Typography } from "../Typography";
import logo from "./logo.svg";
import * as Styled from "./styles";

interface HeaderProps {
  title?: string;
}

export function Header({ title, children }: PropsWithChildren<HeaderProps>) {
  return (
    <Styled.Container>
      {title && (
        <Styled.Title>
          <Typography
            size={{ all: "xl", phone: "lg" }}
            weight="bold"
            component="h1"
          >
            {title}
          </Typography>
        </Styled.Title>
      )}

      {!title && <Styled.Logo src={logo} alt="Артём Пицца" />}

      {children}
    </Styled.Container>
  );
}
