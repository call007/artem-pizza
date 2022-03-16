import styled from "styled-components";
import { variables } from "../../../styles";

export const Box = styled.div`
  margin-top: ${variables.space.xxl};

  @media ${variables.media.phone} {
    margin-top: ${variables.space.xl};
  }
`;

export const BaseBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 25rem;
  margin-left: -${variables.space.base};

  @media ${variables.media.phone} {
    justify-content: space-between;
  }

  ${Box} {
    margin-left: ${variables.space.base};
  }
`;
