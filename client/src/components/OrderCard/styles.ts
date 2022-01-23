import styled, { css } from "styled-components";

export const PlateWrapper = styled.div`
  padding: ${(props) => props.theme.space.base};
`;

export const Ingredients = styled.p(
  ({ theme }) => css`
    margin-top: ${theme.space.xxs};
    font-size: ${theme.typography.fontSize.xs};
    line-height: ${theme.typography.lineHeight.xs};
    color: ${theme.colors.gray600};
  `
);

export const Price = styled.span(
  ({ theme }) => css`
    margin-right: ${theme.space.base};
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.sm};
    line-height: ${theme.typography.lineHeight.sm};
  `
);

export const Footer = styled.div`
  display: flex;
  align-items: baseline;
  border-top: 1px dashed ${(props) => props.theme.colors.gray200};
  margin-top: ${(props) => props.theme.space.base};
  padding-top: ${(props) => props.theme.space.base};
`;

export const PaymentIcon = styled.svg`
  align-self: center;
  width: 1.5rem;
  height: 0.938rem;
  margin-right: ${(props) => props.theme.space.xxxs};
`;
