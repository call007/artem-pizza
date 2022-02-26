import styled, { css } from "styled-components";
import { mixins, variables } from "../../../../styles";

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: calc(${variables.space.xxs} / 2);
`;

export const Label = styled.label`
  user-select: none;
  cursor: pointer;
  display: block;
  position: relative;
  padding: ${variables.space.xs} ${variables.space.base};
  color: transparent;
  -webkit-tap-highlight-color: transparent;
  font-size: ${variables.typography.fontSize.base};
  font-weight: ${variables.typography.fontWeight.medium};
  line-height: ${variables.typography.lineHeight.base};
  border-radius: 0.75rem;
  transition-property: color, background-color, box-shadow;
  transition-duration: ${variables.transitionDuration};

  &:before {
    content: attr(data-label);
    position: absolute;
    margin-left: 0.063em;
    font-weight: ${variables.typography.fontWeight.normal};
    color: ${(props) => props.theme.colors.gray600};
    transition: color ${variables.transitionDuration};
  }

  &:hover {
    &:before {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media ${variables.media.phone} {
    padding: ${variables.space.xxs} ${variables.space.sm};
    font-size: ${variables.typography.fontSize.sm};
    line-height: ${variables.typography.lineHeight.sm};
    border-radius: 0.625rem;
  }
`;

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
