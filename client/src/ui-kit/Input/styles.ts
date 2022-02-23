import styled, { css } from "styled-components";
import { InputSize } from ".";
import { mixins, variables } from "../../styles";

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
  font-size: ${variables.typography.fontSize.lg};
  line-height: ${variables.typography.lineHeight.lg};
`;

const smallSizeInputStyle = css`
  height: 3rem;
  padding: 0 0.75rem;
  font-size: ${variables.typography.fontSize.base};
  line-height: ${variables.typography.lineHeight.base};
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
    transition-duration: ${variables.transitionDuration};

    ${props.errorMessage &&
    css`
      color: ${theme.colors.statusError};
      border-color: currentColor !important;
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

    @media ${variables.media.phone} {
      ${smallSizeInputStyle};
    }
  `
);

export const InputCover = styled.div`
  position: relative;
`;

export const Icon = styled.div`
  ${mixins.fadeIn};
  position: absolute;
  top: 0;
  right: ${variables.space.base};
  display: flex;
  align-items: center;
  height: 100%;
`;

type LabelProps = {
  size: InputSize;
};

const baseSizeLabelStyle = css`
  margin-bottom: ${variables.space.xs};
  font-size: ${variables.typography.fontSize.base};
  line-height: ${variables.typography.lineHeight.base};
`;

const smallSizeLabelStyle = css`
  margin-bottom: ${variables.space.xxs};
  font-size: ${variables.typography.fontSize.sm};
  line-height: ${variables.typography.lineHeight.sm};
`;

export const Label = styled.label<LabelProps>`
  ${(props) =>
    props.size === "sm" ? smallSizeLabelStyle : baseSizeLabelStyle};

  display: block;
  color: ${(props) => props.theme.colors.gray600};
  font-weight: ${variables.typography.fontWeight.medium};

  @media ${variables.media.phone} {
    ${smallSizeLabelStyle};
  }
`;

export const ErrorMessage = styled.p`
  ${mixins.fadeIn};
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.statusError};
  font-size: ${variables.typography.fontSize.base};
  line-height: ${variables.typography.lineHeight.base};

  @media ${variables.media.phone} {
    margin-top: 0.25rem;
    font-size: ${variables.typography.fontSize.sm};
    line-height: ${variables.typography.lineHeight.sm};
  }
`;
