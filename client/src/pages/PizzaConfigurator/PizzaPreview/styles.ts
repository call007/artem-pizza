import styled, { css } from "styled-components";

export const Container = styled.section(
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

export const Pizza = styled.div`
  margin-bottom: ${(props) => props.theme.space.xl};
  text-align: center;

  @media ${({ theme }) => theme.media.phone} {
    width: 91.5%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${(props) => props.theme.space.base};
  }
`;

export const TitleBox = styled.div`
  margin-bottom: ${(props) => props.theme.space.xs};
`;

export const ButtonBox = styled.div`
  margin-top: ${(props) => props.theme.space.xxl};
`;
