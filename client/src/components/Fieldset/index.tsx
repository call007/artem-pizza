import { PropsWithChildren } from "react";

interface Props extends React.HTMLProps<HTMLFieldSetElement> {
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
