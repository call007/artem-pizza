import styled from "styled-components";
import { variables } from "../../styles";

export const Plate = styled.div`
  padding: ${variables.space.xl};

  @media ${variables.media.phone} {
    padding: ${variables.space.base};
  }
`;

export const Footer = styled.div`
  margin-top: ${variables.space.base};
`;
