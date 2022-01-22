import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
  }
`;

export const Aside = styled.div(
  ({ theme }) => css`
    position: sticky;
    top: calc(${theme.header.height} + ${theme.header.marginBottom});
    flex-shrink: 0;
    width: 21.875rem;
    margin-left: auto;
    padding-left: ${theme.space.xxl};
  `
);
