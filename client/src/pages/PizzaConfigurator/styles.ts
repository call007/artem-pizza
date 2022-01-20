import styled, { createGlobalStyle, css } from "styled-components";

export const WhiteBodyBg = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    align-items: stretch;
    flex-direction: column-reverse;
  }
`;

export const Content = styled.section`
  flex-grow: 1;
`;

export const Sidebar = styled.section(
  ({ theme }) => css`
    position: sticky;
    top: calc(${theme.header.height} + ${theme.header.marginBottom});
    flex-shrink: 0;
    width: 21.875rem;
    margin-left: ${theme.space.xxl};

    @media ${theme.media.tablet} {
      width: 20.313rem;
    }

    @media ${theme.media.phone} {
      position: static;
      width: auto;
      margin-left: 0;
      margin-top: ${theme.space.xl};
    }

    @media (max-height: ${670 / 16}em) {
      position: static;
    }
  `
);
