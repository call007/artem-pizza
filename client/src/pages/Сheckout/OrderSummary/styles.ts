import styled, { css } from "styled-components";

export const Dl = styled.dl(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${theme.space.xs} 0;
    color: ${theme.colors.gray600};
    font-size: ${theme.typography.fontSize.sm};
    line-height: ${theme.typography.lineHeight.sm};
  `
);

export const Total = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.space.xxl};
    font-weight: ${theme.typography.fontWeight.medium};
    border-top: 1px dashed ${theme.colors.gray200};
  `
);
