import styled, { css } from "styled-components";
import { mixins, theme } from "../../styles";
import { ButtonSize, ButtonView, Templates } from "./types";

const templates: Templates = {
  all: {
    base: {
      height: "3rem",
      padding: "0 1rem",
      fontSize: theme.typography.fontSize.base,
    },
    large: {
      height: "3.5rem",
      padding: "0 1.5rem",
      fontSize: theme.typography.fontSize.lg,
    },
  },
  phone: {
    base: {
      height: "2.5rem",
      padding: "0 .75rem",
      fontSize: theme.typography.fontSize.sm,
    },
    large: {
      height: "3rem",
      padding: "0 1rem",
      fontSize: theme.typography.fontSize.base,
    },
  },
};

const primaryView = css`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

const secondaryView = css`
  color: ${(props) => props.theme.colors.gray600};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray200};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.gray100};
  }
`;

const ghostView = css`
  ${secondaryView};
  border: none;
`;

const viewStyle = {
  primary: primaryView,
  secondary: secondaryView,
  ghost: ghostView,
};

type ContainerProps = {
  size: ButtonSize;
  view: ButtonView;
  isDisabled?: boolean;
  isLong?: boolean;
};

export const Container = styled.button<ContainerProps>(
  ({ theme, size, view, isDisabled, isLong }) => css`
    ${mixins.buttonReset};
    position: relative;
    width: ${isLong && "100%"};
    height: ${templates.all[size].height};
    padding: ${templates.all[size].padding};
    font-size: ${templates.all[size].fontSize};
    font-weight: ${theme.typography.fontWeight.bold};
    text-decoration: none;
    border-radius: 1rem;

    ${isDisabled
      ? css`
          cursor: not-allowed;
          color: ${theme.colors.gray400};
          background-color: ${theme.colors.gray200};
        `
      : css`
          ${viewStyle[view]};

          &:hover,
          &:focus {
            box-shadow: ${(props) => theme.shadow.outer.sm};
          }

          &:active {
            box-shadow: ${(props) => theme.shadow.inner.sm};
          }
        `};

    @media ${theme.media.phone} {
      height: ${templates.phone[size].height};
      padding: ${templates.phone[size].padding};
      font-size: ${templates.phone[size].fontSize};
    }
  `
);

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

export const Icon = styled.div`
  flex-shrink: 0;
  line-height: 0;
`;

export const Text = styled.div`
  &:not(:only-child) {
    margin-left: ${(props) => props.theme.space.xs};
  }
`;
