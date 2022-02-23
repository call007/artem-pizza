import styled from "styled-components";
import { variables } from "../../../styles";

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: 27.25rem;
  padding: calc(${variables.space.xxs} / 2);
  padding-left: 0;
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 0.875rem;

  @media ${variables.media.phone} {
    max-width: none;
    white-space: nowrap;
  }
`;

export const SkeletonWrapper = styled.span`
  display: block;
  width: 9.625rem;
  height: 2.75rem;
  line-height: 1;

  @media ${variables.media.phone} {
    width: 8.375rem;
    height: 2rem;
  }
`;
