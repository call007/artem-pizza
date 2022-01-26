import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.space.base};
    padding-top: ${theme.space.xs};

    @media ${theme.media.phone} {
      position: sticky;
      z-index: ${theme.zIndex.panel};
      bottom: 0;
      margin-bottom: -${theme.space.xxl};
      padding-left: ${theme.space.base};
      padding-right: ${theme.space.base};
      padding-bottom: ${theme.space.sm};
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow.outer.panel};
    }
  `
);

export const Dl = styled.dl(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: ${theme.space.xs} ${theme.space.base};
    color: ${theme.colors.gray600};
    font-size: ${theme.typography.fontSize.sm};
    line-height: ${theme.typography.lineHeight.sm};

    @media ${theme.media.phone} {
      margin: ${theme.space.xxs} 0;
      font-size: ${theme.typography.fontSize.xs};
      line-height: ${theme.typography.lineHeight.xs};
    }
  `
);

export const Total = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.space.xxl};
    font-weight: ${theme.typography.fontWeight.medium};
    border-top: 1px dashed ${theme.colors.gray200};

    @media ${theme.media.phone} {
      margin-bottom: ${theme.space.base};
    }
  `
);

export const ErrorBox = styled.div`
  margin-top: ${(props) => props.theme.space.sm};
`;
