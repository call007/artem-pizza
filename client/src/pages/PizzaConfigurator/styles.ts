import styled, { createGlobalStyle } from "styled-components";

export const WhiteBodyBg = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    align-items: stretch;
    flex-direction: column-reverse;
  }
`;
