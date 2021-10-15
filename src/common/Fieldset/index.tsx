import { FieldsetHTMLAttributes, PropsWithChildren } from "react";

interface Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
}

export function Fieldset({
  legend,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <fieldset className="fieldset" {...props}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
