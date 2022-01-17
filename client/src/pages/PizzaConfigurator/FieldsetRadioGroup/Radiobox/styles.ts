import styled, { css } from "styled-components";
import { mixins } from "../../../../styles";

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: calc(${(props) => props.theme.space.xxs} / 2);
`;

export const Label = styled.label(
  ({ theme }) => css`
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    cursor: pointer;
    display: block;
    position: relative;
    padding: ${theme.space.xs} ${theme.space.base};
    color: transparent;
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: ${theme.typography.lineHeight.base};
    border-radius: 0.75rem;
    transition-property: color, background-color, box-shadow;
    transition-duration: ${theme.transitionDuration};

    &:before {
      content: attr(data-label);
      position: absolute;
      margin-left: 0.063em;
      font-weight: ${theme.typography.fontWeight.normal};
      color: ${theme.colors.gray600};
      transition: inherit;
    }

    &:hover {
      &:before {
        color: ${theme.colors.primary};
      }
    }

    @media ${theme.media.phone} {
      padding: ${theme.space.xxs} ${theme.space.sm};
      font-size: ${theme.typography.fontSize.sm};
      line-height: ${theme.typography.lineHeight.sm};
      border-radius: 0.625rem;
    }
  `
);

export const Input = styled.input(
  ({ theme }) => css`
    ${mixins.visuallyHidden};

    &:checked + ${Label} {
      cursor: default;

      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow.outer.sm};

      &:before {
        color: transparent;
      }
    }

    &:focus-visible + ${Label} {
      outline: 2px solid ${(props) => props.theme.colors.primary};
    }
  `
);
