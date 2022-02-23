import styled from "styled-components";
import { variables } from "../../../styles";

export const Container = styled.section`
  text-align: center;
  margin-bottom: calc(${variables.space.xl} + ${variables.space.xs});
  padding-top: calc(${variables.space.xxl} + ${variables.space.xs});

  @media ${variables.media.phone} {
    max-width: 15.625rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${variables.space.xl};
    padding-top: ${variables.space.xl};
  }
`;

export const SuccessIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.188rem;
  height: 4.188rem;
  margin-bottom: ${variables.space.xl};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.statusSuccess};
  border-radius: 50%;

  @media ${variables.media.phone} {
    width: 3.188rem;
    height: 3.188rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${variables.space.xs};
`;
