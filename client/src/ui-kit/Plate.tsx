import styled from "styled-components";
import { variables } from "../styles";

export const Plate = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.outer.lg};
  border-radius: 1rem;
  transition: background-color ${variables.transitionDuration};
`;
