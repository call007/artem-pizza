import styled from "styled-components";
import { mixins, variables } from "../../../styles";
import { StyledInput } from "../../../ui-kit";

export const Fieldset = styled.fieldset`
  ${mixins.fieldsetReset};
`;

export const Separator = styled.div`
  height: 0;
  margin: ${variables.space.xl} 0;
  border-top: 1px solid ${(props) => props.theme.colors.gray200};

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

export const PaymentIcon = styled.svg`
  width: 2rem;
  height: 1.25rem;
`;
