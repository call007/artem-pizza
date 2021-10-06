import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
  price?: number;
}

export function Radiobox({ id, price, ...props }: Props) {
  return (
    <div>
      <input {...props} type="radio" id={id} data-price={price} />
      <label htmlFor={id}>{props.value}</label>
    </div>
  );
}
