import styled, { css } from "styled-components";

export const Container = styled.section(
  ({ theme }) => css`
    text-align: center;
    margin-bottom: calc(${theme.space.xl} + ${theme.space.xs});
    padding-top: calc(${theme.space.xxl} + ${theme.space.xs});

    @media ${theme.media.phone} {
      max-width: 15.625rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${theme.space.xl};
      padding-top: ${theme.space.xl};
    }
  `
);

export const SuccessIcon = styled.div(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.188rem;
    height: 4.188rem;
    margin-bottom: ${theme.space.xl};
    color: ${theme.colors.white};
    background-color: ${theme.colors.statusSuccess};
    border-radius: 50%;

    @media ${theme.media.phone} {
      width: 3.188rem;
      height: 3.188rem;
    }
  `
);

export const TitleBox = styled.div`
  margin-bottom: ${(props) => props.theme.space.xs};
`;
