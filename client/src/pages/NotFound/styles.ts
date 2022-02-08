import styled from "styled-components";

export const PlateWrapper = styled.div`
  padding: ${(props) => props.theme.space.xl};
  text-align: center;

  @media ${({ theme }) => theme.media.phone} {
    padding: ${(props) => props.theme.space.base};
  }
`;

export const TitleBox = styled.div`
  margin-bottom: ${(props) => props.theme.space.xs};
`;

export const SubtitleBox = styled.div`
  margin-bottom: ${(props) => props.theme.space.base};

  @media ${({ theme }) => theme.media.phone} {
    margin-bottom: ${(props) => props.theme.space.sm};
  }
`;
