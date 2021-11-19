import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
  price?: number;
}

export type RadioboxProps = Omit<Props, "type">;

export const Radiobox = React.forwardRef<HTMLInputElement, RadioboxProps>(
  ({ id, label, price, ...props }, ref) => (
    <div ref={ref}>
      <input {...props} type="radio" id={id} ref={ref} />
      <label htmlFor={id}>{label}</label>
      {!!price && ` ${price} ₽`}
    </div>
  )
);
