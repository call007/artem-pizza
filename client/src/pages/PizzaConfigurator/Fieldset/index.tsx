import { FieldsetHTMLAttributes } from "react";
import { Typography } from "../../../ui-kit";
import * as Styled from "./styles";

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
}

export function Fieldset(props: FieldsetProps) {
  const { legend, children, ...restProps } = props;

  return (
    <Styled.Fieldset {...restProps}>
      <>
        <Typography
          size={{ all: "base", phone: "sm" }}
          component="legend"
          weight="medium"
          color={(color) => color.gray600}
        >
          {legend}
        </Typography>

        <Styled.Box>{children}</Styled.Box>
      </>
    </Styled.Fieldset>
  );
}
