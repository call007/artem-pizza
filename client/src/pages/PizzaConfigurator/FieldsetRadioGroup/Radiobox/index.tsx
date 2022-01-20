import React, { HTMLAttributes } from "react";
import * as Styled from "./styles";

interface RadioboxProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
  price?: number;
  isLoading?: boolean;
}

export const Radiobox = React.forwardRef<HTMLInputElement, RadioboxProps>(
  ({ id, label, price, ...props }, ref) => (
    <Styled.Container>
      <Styled.Input {...props} type="radio" id={id} ref={ref} />
      <Styled.Label htmlFor={id} data-label={label}>
        {label}
      </Styled.Label>
      {!!price && ` ${price} ₽`}
    </Styled.Container>
  )
);
