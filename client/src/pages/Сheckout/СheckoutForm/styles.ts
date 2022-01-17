import styled, { css } from "styled-components";
import { mixins } from "../../../styles";

export const Fieldset = styled.fieldset`
  ${mixins.fieldsetReset};
`;

export const Separator = styled.div(
  ({ theme }) => css`
    height: 0;
    margin: ${theme.space.xl} 0;
    border-top: 1px solid ${theme.colors.gray200};

    @media ${theme.media.phone} {
      margin-top: ${theme.space.base};
    }
  `
);

export const Box = styled.div`
  margin-top: ${(props) => props.theme.space.xl};

  @media ${({ theme }) => theme.media.phone} {
    margin-top: ${(props) => props.theme.space.base};
  }
`;

export const ExtraAddressBox = styled(Box)`
  display: flex;
  max-width: 20.5rem;

  & > * {
    flex-grow: 1;

    & + * {
      margin-left: ${(props) => props.theme.space.xs};
    }
  }
`;

export const ExpirationCVVBox = styled(Box)`
  display: flex;
  justify-content: space-between;

  & > *:first-of-type {
    max-width: 7.813em;
  }

  & > *:last-of-type {
    max-width: 4.813em;
  }
`;
