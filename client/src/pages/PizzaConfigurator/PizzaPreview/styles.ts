import styled from "styled-components";
import { variables } from "../../../styles";

export const Pizza = styled.div`
  margin-bottom: ${variables.space.xl};
  text-align: center;

  @media ${variables.media.phone} {
    width: 91.5%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${variables.space.base};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${variables.space.xs};
`;

export const Button = styled.button`
  margin-top: ${variables.space.xxl};
`;
