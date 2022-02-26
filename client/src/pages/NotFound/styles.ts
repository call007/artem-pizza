import styled from "styled-components";
import { variables } from "../../styles";

export const Plate = styled.div`
  padding: ${variables.space.xl};
  text-align: center;

  @media ${variables.media.phone} {
    padding: ${variables.space.base};
  }
`;

export const Title = styled.h1`
  margin-bottom: ${variables.space.xs};
`;

export const Subtitle = styled.div`
  margin-bottom: ${variables.space.base};

  @media ${variables.media.phone} {
    margin-bottom: ${variables.space.sm};
  }
`;
