import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
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
