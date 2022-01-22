import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: ${`-${theme.space.base}`};
    margin-top: ${`-${theme.space.xl}`};
    padding-top: ${theme.space.base};

    @media ${theme.media.phone} {
      flex-wrap: nowrap;
      margin-left: ${`-${theme.space.xs}`};
      padding-top: ${theme.space.sm};
    }
  `
);

export const SkeletonWrapper = styled.span(
  ({ theme }) => css`
    display: inline-block;
    vertical-align: top;
    width: 7rem;
    height: 9.938rem;
    margin-left: ${theme.space.base};
    margin-top: ${theme.space.xl};
    line-height: 1;

    @media ${theme.media.phone} {
      width: 6.5rem;
      height: 8.188rem;
      margin-left: ${theme.space.xs};
    }
  `
);
