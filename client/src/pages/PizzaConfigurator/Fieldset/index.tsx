import { FieldsetHTMLAttributes } from "react";
import { Typography, TypographySkeleton } from "../../../ui-kit";
import * as Styled from "./styles";

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  isLoading?: boolean;
}

export function Fieldset(props: FieldsetProps) {
  const { legend, children, isLoading, ...restProps } = props;

  return (
    <Styled.Fieldset {...restProps}>
      <Typography
        size={{ all: "base", phone: "sm" }}
        component="legend"
        weight="medium"
        color={(color) => color.gray600}
      >
        {isLoading ? <TypographySkeleton width="5rem" /> : legend}
      </Typography>

      <Styled.Box>{children}</Styled.Box>
    </Styled.Fieldset>
  );
}
