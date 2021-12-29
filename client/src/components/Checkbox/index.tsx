import { forwardRef, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
  price?: number;
}

export type CheckboxProps = Omit<Props, "type">;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
