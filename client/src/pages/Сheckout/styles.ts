import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    flex-wrap: wrap-reverse;
  }
`;

export const Content = styled.div`
  max-width: 33.125rem;
`;

export const Aside = styled.div(
  ({ theme }) => css`
    box-sizing: content-box;
    position: sticky;
    top: calc(${theme.header.height} + ${theme.header.marginBottom});
    flex-shrink: 0;
    width: 21.875rem;
    margin-left: auto;
    padding-left: ${theme.space.xxl};

    @media ${theme.media.phone} {
      position: static;
      flex-grow: 1;
      flex-shrink: initial;
      width: auto;
      max-width: 33.125rem;
      margin-bottom: ${theme.space.base};
      margin-left: 0;
      padding-left: 0;
    }
  `
);
