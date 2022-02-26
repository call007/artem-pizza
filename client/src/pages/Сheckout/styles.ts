import styled from "styled-components";
import { variables } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${variables.media.phone} {
    flex-wrap: wrap-reverse;
  }
`;

export const Content = styled.div`
  max-width: 33.125rem;
`;

export const Aside = styled.div`
  box-sizing: content-box;
  position: sticky;
  top: calc(${variables.header.height} + ${variables.header.marginBottom});
  flex-shrink: 0;
  width: 21.875rem;
  margin-left: auto;
  padding-left: ${variables.space.xxl};

  @media ${variables.media.phone} {
    position: static;
    flex-grow: 1;
    flex-shrink: initial;
    width: auto;
    max-width: 33.125rem;
    margin-bottom: ${variables.space.base};
    margin-left: 0;
    padding-left: 0;
  }
`;
