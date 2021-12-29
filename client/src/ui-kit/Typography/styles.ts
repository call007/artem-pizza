import styled from "styled-components";
import { TypographySize, TypographyWeight } from "../../types";

type ContainerProps = {
  size: TypographySize;
  weight?: TypographyWeight;
};

export const Container = styled.p<ContainerProps>`
  font-size: ${(props) => props.theme.typography.fontSize[props.size]};
  line-height: ${(props) => props.theme.typography.lineHeight[props.size]};
  font-weight: ${({ weight, theme }) =>
    weight ? theme.typography.fontWeight[weight] : undefined};
  margin: 0;
`;
