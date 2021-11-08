import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  value: string;
  id: string;
  price?: number;
}

export type RadioboxProps = Omit<Props, "type">;

export const Radiobox = React.forwardRef<HTMLInputElement, RadioboxProps>(
  ({ id, price, ...props }, ref) => (
    <div ref={ref}>
      <input {...props} type="radio" id={id} ref={ref} />
      <label htmlFor={id}>{props.value}</label>
      {!!price && ` ${price} ₽`}
    </div>
  )
);
