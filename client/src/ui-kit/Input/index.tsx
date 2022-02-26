import { forwardRef, InputHTMLAttributes } from "react";
import * as Styled from "./styles";

export type InputSize = "sm" | "base";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  id: string;
  label?: string;
  errorMessage?: string;
  size?: InputSize;
  icon?: JSX.Element;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, size = "base", icon, ...restProps } = props;

  return (
    <Styled.Container>
      {label && (
        <Styled.Label size={size} htmlFor={props.id}>
          {label}
        </Styled.Label>
      )}

      <Styled.InputCover>
        <Styled.Input inputSize={size} ref={ref} {...restProps} />
        {icon && <Styled.Icon>{icon}</Styled.Icon>}
      </Styled.InputCover>

      {props.errorMessage && (
        <Styled.ErrorMessage>{props.errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.Container>
  );
});

export { Input as StyledInput } from "./styles";
