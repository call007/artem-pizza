import styled from "styled-components";
import { mixins, variables } from "../../../styles";
import { PaymentSystem, Themes } from "../../../types";
import { StyledInput } from "../../../ui-kit";

export const Fieldset = styled.fieldset`
  ${mixins.fieldsetReset};
`;

export const Separator = styled.div`
  height: 0;
  margin: ${variables.space.xl} 0;
  border-top: 1px solid ${(props) => props.theme.colors.gray200};
  transition: border-top-color ${variables.transitionDuration};

  @media ${variables.media.phone} {
    margin: ${variables.space.base} 0;
  }
`;

export const Box = styled.div`
  margin-top: ${variables.space.xl};

  @media ${variables.media.phone} {
    margin-top: ${variables.space.base};
  }
`;

export const ExtraAddressBox = styled(Box)`
  display: flex;
  max-width: 20.5rem;

  & > * {
    flex-grow: 1;

    & + * {
      margin-left: ${variables.space.xs};
    }
  }
`;

export const ExpirationCVVBox = styled(Box)`
  display: flex;
  justify-content: space-between;

  & > *:first-of-type {
    ${StyledInput} {
      max-width: 7.813em;
    }
  }

  & > *:last-of-type {
    margin-left: ${variables.space.xl};
    text-align: right;

    ${StyledInput} {
      display: inline-block;
      vertical-align: top;
      max-width: 4.813em;
    }
  }
`;

export const Payment = styled.div`
  position: relative;
`;

type PaymentIconProps = {
  themeName?: Themes;
};

export const PaymentIcon = styled.svg.withConfig<PaymentIconProps>({
  shouldForwardProp: (prop) => prop !== "themeName",
})`
  ${mixins.fadeIn};
  width: 2rem;
  height: 1.25rem;

  &[aria-label="${PaymentSystem.Visa}"] {
    filter: ${(props) =>
      props.themeName === "dark" && "brightness(3.5) contrast(2)"};
  }
`;
