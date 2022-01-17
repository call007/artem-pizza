import styled, { css } from "styled-components";
import { InputSize } from ".";

export const Container = styled.div`
  font-size: 1rem;
`;

type InputProps = {
  errorMessage?: string;
  inputSize: InputSize;
};

const baseSizeInputStyle = css`
  height: 3.5rem;
  padding: 0 1rem;
  font-size: ${(props) => props.theme.typography.fontSize.lg};
  line-height: ${(props) => props.theme.typography.lineHeight.lg};
`;

const smallSizeInputStyle = css`
  height: 3rem;
  padding: 0 0.75rem;
  font-size: ${(props) => props.theme.typography.fontSize.base};
  line-height: ${(props) => props.theme.typography.lineHeight.base};
`;

export const Input = styled.input<InputProps>(
  ({ theme, inputSize: size, ...props }) => css`
    ${size === "sm" ? smallSizeInputStyle : baseSizeInputStyle};
    appearance: none;
    display: block;
    width: 100%;

    color: ${theme.colors.black};

    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.gray200};
    border-radius: 0.5rem;
    transition-property: background-color, border-color, color;
    transition-duration: ${theme.transitionDuration};

    ${props.errorMessage &&
    css`
      border-color: ${theme.colors.statusError} !important;
    `};

    &:hover {
      border-color: ${theme.colors.gray400};
    }

    &:focus {
      outline: 0;
      border-color: ${theme.colors.primary};
    }

    &::placeholder {
      opacity: 1;
      color: ${theme.colors.gray400};
    }

    @media ${theme.media.phone} {
      ${smallSizeInputStyle};
    }
  `
);

type LabelProps = {
  size: InputSize;
};

const baseSizeLabelStyle = css`
  margin-bottom: ${(props) => props.theme.space.xs};
  font-size: ${(props) => props.theme.typography.fontSize.base};
  line-height: ${(props) => props.theme.typography.lineHeight.base};
`;

const smallSizeLabelStyle = css`
  margin-bottom: ${(props) => props.theme.space.xxs};
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  line-height: ${(props) => props.theme.typography.lineHeight.sm};
`;

export const Label = styled.label<LabelProps>(
  ({ theme, size }) => css`
    ${size === "sm" ? smallSizeLabelStyle : baseSizeLabelStyle};
    display: block;
    color: ${theme.colors.gray600};
    font-weight: ${theme.typography.fontWeight.medium};

    @media ${theme.media.phone} {
      ${smallSizeLabelStyle};
    }
  `
);

export const ErrorMessage = styled.p(
  ({ theme }) => css`
    margin-top: 0.5rem;
    color: ${theme.colors.statusError};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.base};

    @media ${theme.media.phone} {
      margin-top: 0.25rem;
      font-size: ${theme.typography.fontSize.sm};
      line-height: ${theme.typography.lineHeight.sm};
    }
  `
);
