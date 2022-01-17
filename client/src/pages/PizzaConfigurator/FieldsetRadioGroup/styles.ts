import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: 27.25rem;
  padding: calc(${(props) => props.theme.space.xxs} / 2);
  padding-left: 0;
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 0.875rem;

  @media ${({ theme }) => theme.media.phone} {
    max-width: none;
    white-space: nowrap;
  }
`;
