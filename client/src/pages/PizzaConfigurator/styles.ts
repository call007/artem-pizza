import styled, { createGlobalStyle } from "styled-components";
import { variables } from "../../styles";

export const WhiteBodyBg = createGlobalStyle`
  .App {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${variables.media.phone} {
    align-items: stretch;
    flex-direction: column-reverse;
  }
`;

export const Content = styled.section`
  flex-grow: 1;
`;

export const Sidebar = styled.section`
  position: sticky;
  top: calc(${variables.header.height} + ${variables.header.marginBottom});
  flex-shrink: 0;
  width: 21.875rem;
  margin-left: ${variables.space.xxl};

  @media ${variables.media.tablet} {
    width: 20.313rem;
  }

  @media ${variables.media.phone} {
    position: static;
    width: auto;
    margin-left: 0;
    margin-top: ${variables.space.xl};
  }

  @media (max-height: ${670 / 16}em) {
    position: static;
  }
`;
