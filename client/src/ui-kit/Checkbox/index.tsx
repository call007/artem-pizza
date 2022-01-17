import React, { HTMLAttributes } from "react";
import { SvgIcon } from "../SvgIcon";
import * as Styled from "./styles";

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, ...restProps }, ref) => (
    <Styled.Container>
      <Styled.Input {...restProps} type="checkbox" id={id} ref={ref} />
      <Styled.Checkbox>
        <SvgIcon src="check" />
      </Styled.Checkbox>
      {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
    </Styled.Container>
  )
);
