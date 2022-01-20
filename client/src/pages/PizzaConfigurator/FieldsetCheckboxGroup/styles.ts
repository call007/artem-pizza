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

    .skeleton {
      width: 7rem;
      height: 9.75rem;
      margin-left: ${theme.space.base};
      margin-top: ${theme.space.xl};

      @media ${theme.media.phone} {
        width: 6.5rem;
        height: 8.25rem;
        margin-left: ${theme.space.xs};
      }
    }
  `
);
