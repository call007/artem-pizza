import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
  price?: number;
}

export function Checkbox({ id, price, ...props }: Props) {
  return (
    <div>
      <input {...props} type="checkbox" id={id} data-price={price} />
      <label htmlFor={id}>
        {props.value} {price} ₽
      </label>
    </div>
  );
}
