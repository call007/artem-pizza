import { useEffect, useState } from "react";
import { variables } from "../../../../styles";
import * as Styled from "./styles";

interface TransitionProps {
  children: JSX.Element;
  in: boolean;
}

export function UnmountTransition(props: TransitionProps) {
  const [isVisible, setIsVisible] = useState(props.in);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (props.in) {
      setIsVisible(true);
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, parseFloat(variables.transitionDuration) * 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [props.in]);

  return isVisible ? (
    <Styled.Container isVisible={props.in}>{props.children}</Styled.Container>
  ) : null;
}
