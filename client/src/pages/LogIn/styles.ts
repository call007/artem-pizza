import styled from "styled-components";

export const PlateWrapper = styled.div`
  padding: ${(props) => props.theme.space.xl};

  @media ${({ theme }) => theme.media.phone} {
    padding: ${(props) => props.theme.space.base};
  }
`;

export const Footer = styled.div`
  margin-top: ${(props) => props.theme.space.base};
`;
