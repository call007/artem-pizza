import styled from "styled-components";

export const Box = styled.p`
  margin-bottom: ${(props) => props.theme.space.xs};

  @media ${({ theme }) => theme.media.phone} {
    margin-bottom: ${(props) => props.theme.space.xxxs};
  }
`;
