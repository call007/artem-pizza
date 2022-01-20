import styled from "styled-components";

export const Box = styled.div`
  margin-top: ${(props) => props.theme.space.xxl};

  @media ${({ theme }) => theme.media.phone} {
    margin-top: ${(props) => props.theme.space.xl};
  }
`;

export const BaseBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 25rem;
  margin-left: ${(props) => `-${props.theme.space.base}`};

  @media ${({ theme }) => theme.media.phone} {
    justify-content: space-between;
  }

  ${Box} {
    margin-left: ${(props) => props.theme.space.base};
  }
`;
