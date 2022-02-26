import styled from "styled-components";
import { mixins, variables } from "../../../styles";

export const Fieldset = styled.fieldset`
  ${mixins.fieldsetReset};
`;

export const Box = styled.div`
  margin-top: ${variables.space.xs};

  @media ${variables.media.phone} {
    margin-top: ${variables.space.xxs};
  }
`;
