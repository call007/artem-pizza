import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  value: string;
  id: string;
  price?: number;
}

export type CheckboxProps = Omit<Props, "type">;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, price, ...props }, ref) => (
    <div>
      <input {...props} type="checkbox" id={id} ref={ref} />
      <label htmlFor={id}>
        {props.value}
        {!!price && ` ${price} ₽`}
      </label>
    </div>
  )
);
