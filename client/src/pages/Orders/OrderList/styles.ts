import styled from "styled-components";
import { variables } from "../../../styles";

export const Item = styled.div`
  & + & {
    margin-top: ${variables.space.base};

    @media ${variables.media.phone} {
      margin-top: ${variables.space.xs};
    }
  }
`;
