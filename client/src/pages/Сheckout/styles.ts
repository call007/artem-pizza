import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${({ theme }) => theme.media.phone} {
    flex-direction: column;
  }
`;
