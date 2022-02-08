import styled from "styled-components";

export const Item = styled.div`
  & + & {
    margin-top: ${(props) => props.theme.space.base};

    @media ${({ theme }) => theme.media.phone} {
      margin-top: ${(props) => props.theme.space.xs};
    }
  }
`;
