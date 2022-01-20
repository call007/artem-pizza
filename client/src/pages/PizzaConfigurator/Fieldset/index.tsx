import { FieldsetHTMLAttributes } from "react";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "styled-components";
import { Typography } from "../../../ui-kit";
import * as Styled from "./styles";

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  isLoading?: boolean;
}

export function Fieldset(props: FieldsetProps) {
  const { legend, children, isLoading, ...restProps } = props;
  const theme = useTheme();

  return (
    <Styled.Fieldset {...restProps}>
      <Typography
        size={{ all: "base", phone: "sm" }}
        component="legend"
        weight="medium"
        color={(color) => color.gray600}
      >
        {isLoading ? (
          <Skeleton
            wrapper={Styled.SkeletonWrapper}
            className="skeleton"
            baseColor={theme.colors.gray200}
            highlightColor={theme.colors.gray100}
          />
        ) : (
          legend
        )}
      </Typography>

      <Styled.Box>{children}</Styled.Box>
    </Styled.Fieldset>
  );
}
