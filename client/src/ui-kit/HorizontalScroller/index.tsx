import { PropsWithChildren } from "react";
import * as Styled from "./styles";

export function HorizontalScroller(props: PropsWithChildren<{}>) {
  return (
    <Styled.Container>
      <Styled.Wrapper>{props.children}</Styled.Wrapper>
    </Styled.Container>
  );
}
