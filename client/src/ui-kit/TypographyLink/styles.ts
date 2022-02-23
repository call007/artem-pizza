import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { variables } from "../../styles";

export const Link = styled(RouterLink)(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.primary};
    text-decoration: none;
    border-radius: 0.25rem;
    transition: color ${variables.transitionDuration};

    &:hover {
      color: ${theme.colors.primaryDark};
    }

    &:focus {
      outline: 0;
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: ${variables.space.xs};
    }
  `
);

export const Icon = styled.span`
  margin-right: ${variables.space.xs};
  line-height: 0;
`;
