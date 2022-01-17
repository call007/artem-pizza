import styled, { css } from "styled-components";
import { LazyImage } from "../LazyImage";

export const Container = styled.header(
  ({ theme }) => css`
    // for old browsers
    position: relative;
    position: sticky;
    z-index: ${theme.zIndex.header};
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${theme.header.height};
    margin-bottom: ${theme.header.marginBottom};
    padding: ${theme.space.base};
    font-size: 1rem;
    box-shadow: ${theme.shadow.outer.md};
    background-color: ${theme.colors.white};

    & > * {
      order: 0;

      &:first-child {
        order: 1;
      }

      &:last-child {
        order: 2;
        margin-left: auto;
      }
    }

    @media ${theme.media.phone} {
      height: auto;
      margin-bottom: ${theme.space.base};
      padding: ${`${theme.space.xs} ${theme.space.xs} ${theme.space.xs} ${theme.space.base}`};
    }
  `
);

export const Logo = styled(LazyImage)`
  width: 16.188em;
  height: 2.5em;

  @media ${({ theme }) => theme.media.phone} {
    font-size: 60%;
  }
`;

export const Title = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;

  @media ${({ theme }) => theme.media.phone} {
    position: static;
    text-align: left;
  }
`;
