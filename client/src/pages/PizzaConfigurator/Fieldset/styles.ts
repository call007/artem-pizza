import styled from "styled-components";
import { mixins } from "../../../styles";

export const Fieldset = styled.fieldset`
  ${mixins.fieldsetReset};
`;

export const Box = styled.div`
  margin-top: ${(props) => props.theme.space.xs};

  @media ${({ theme }) => theme.media.phone} {
    margin-top: ${(props) => props.theme.space.xxs};
  }
`;
