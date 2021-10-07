import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
  price?: number;
}

export function Radiobox({ id, price, ...props }: Props) {
  return (
    <div>
      <input {...props} type="radio" id={id} />
      <label htmlFor={id}>{props.value}</label>
      {!!price && ` ${price} ₽`}
    </div>
  );
}
