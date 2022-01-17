import styled from "styled-components";

export const TitleBox = styled.div`
  margin-bottom: ${(props) => props.theme.space.xs};

  @media ${({ theme }) => theme.media.phone} {
    margin-bottom: ${(props) => props.theme.space.xxxs};
  }
`;
