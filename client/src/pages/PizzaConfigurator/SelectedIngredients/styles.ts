import styled from "styled-components";
import { variables } from "../../../styles";

export const Box = styled.p`
  margin-bottom: ${variables.space.xs};

  @media ${variables.media.phone} {
    margin-bottom: ${variables.space.xxxs};
  }
`;
