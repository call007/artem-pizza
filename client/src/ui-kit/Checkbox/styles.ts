import styled from "styled-components";
import { mixins } from "../../styles";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Label = styled.label`
  padding-left: ${(props) => props.theme.space.xs};
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  padding-top: 0.063rem;
  color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.gray200};
  border-radius: 0.25rem;
  transition-property: border-color, background-color;
  transition-duration: ${(props) => props.theme.transitionDuration}; ;
`;

export const Input = styled.input`
  ${mixins.visuallyHidden};

  &:hover + ${Checkbox} {
    border-color: ${(props) => props.theme.colors.gray400};
  }

  &:checked + ${Checkbox} {
    border-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:checked:hover + ${Checkbox} {
    border-color: ${(props) => props.theme.colors.primaryDark};
    background-color: ${(props) => props.theme.colors.primaryDark};
  }

  &:focus-visible + ${Checkbox} {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;
