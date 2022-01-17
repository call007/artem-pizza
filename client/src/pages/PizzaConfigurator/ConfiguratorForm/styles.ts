import styled from "styled-components";

export const Container = styled.section`
  flex-grow: 1;
`;

export const Box = styled.div`
  margin-top: ${(props) => props.theme.space.xxl};

  @media ${({ theme }) => theme.media.phone} {
    margin-top: ${(props) => props.theme.space.xl};
  }
`;
