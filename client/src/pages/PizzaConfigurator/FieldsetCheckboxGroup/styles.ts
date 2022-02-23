import styled from "styled-components";
import { variables } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  margin-left: -${variables.space.base};
  margin-top: -${variables.space.xl};
  padding-top: ${variables.space.base};

  @media ${variables.media.phone} {
    flex-wrap: nowrap;
    margin-left: -${variables.space.xs};
    padding-top: ${variables.space.sm};
  }
`;

export const SkeletonWrapper = styled.span`
  display: inline-block;
  vertical-align: top;
  width: 7rem;
  height: 9.938rem;
  margin-left: ${variables.space.base};
  margin-top: ${variables.space.xl};
  line-height: 1;

  @media ${variables.media.phone} {
    width: 6.5rem;
    height: 8.188rem;
    margin-left: ${variables.space.xs};
  }
`;
