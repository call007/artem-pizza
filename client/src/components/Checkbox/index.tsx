import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
  price?: number;
}

export type CheckboxProps = Omit<Props, "type">;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, price, ...props }, ref) => (
    <div>
      <input {...props} type="checkbox" id={id} ref={ref} />
      <label htmlFor={id}>
        {label}
        {!!price && ` ${price} ₽`}
      </label>
    </div>
  )
);
