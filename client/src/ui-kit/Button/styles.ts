import { Link } from "react-router-dom";
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
      fontSize: theme.typography.fontSize.base,
    },
  },
  phone: {
    base: {
      height: "2.5rem",
      padding: "0 .75rem",
      fontSize: theme.typography.fontSize.sm,
    },
    large: {
      height: "3.5rem",
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

const view = {
  primary: primaryView,
  secondary: secondaryView,
  ghost: ghostView,
};

type ContainerProps = {
  size: ButtonSize;
  view: ButtonView;
  isDisabled?: boolean;
};

export const Container = styled.button<ContainerProps>`
  ${mixins.buttonReset};

  ${(props) => css`
    height: ${templates.all[props.size].height};
    padding: ${templates.all[props.size].padding};
    font-size: ${templates.all[props.size].fontSize};
    font-weight: ${props.theme.typography.fontWeight.bold};
  `};

  position: relative;
  text-decoration: none;
  border-radius: 1rem;

  ${(props) =>
    props.isDisabled
      ? css`
          cursor: not-allowed;
          color: ${props.theme.colors.gray400};
          background-color: ${props.theme.colors.gray200};
        `
      : css`
          ${view[props.view]};

          &:hover,
          &:focus {
            box-shadow: ${(props) => props.theme.shadow.outer.sm};
          }

          &:active {
            box-shadow: ${(props) => props.theme.shadow.inner.sm};
          }
        `};

  @media ${({ theme }) => theme.media.phone} {
    ${(props) => css`
      height: ${templates.phone[props.size].height};
      padding: ${templates.phone[props.size].padding};
      font-size: ${templates.phone[props.size].fontSize};
    `};
  }
`;

export const LinkContainer = styled(Link)``;

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
    margin-left: 0.5rem;
  }
`;
