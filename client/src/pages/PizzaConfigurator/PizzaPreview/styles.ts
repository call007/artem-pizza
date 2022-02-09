import styled from "styled-components";

export const Pizza = styled.div`
  margin-bottom: ${(props) => props.theme.space.xl};
  text-align: center;

  @media ${({ theme }) => theme.media.phone} {
    width: 91.5%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${(props) => props.theme.space.base};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space.xs};
`;

export const Button = styled.button`
  margin-top: ${(props) => props.theme.space.xxl};
`;
