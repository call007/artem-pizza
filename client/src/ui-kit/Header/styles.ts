import styled from "styled-components";

export const Container = styled.header`
  // for old browsers
  position: relative;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.outer.md};
  background-color: ${({ theme }) => theme.colors.white};

  & > * {
    order: 0;

    &:first-child {
      order: 1;
    }

    &:last-child {
      order: 2;
      margin-left: auto;
    }
  }

  @media ${({ theme }) => theme.media.phone} {
    padding: 0.5rem 0.5rem 0.5rem 1rem;
  }
`;

export const Logo = styled.img`
  width: 16.188em;
  height: 2.5em;

  @media ${({ theme }) => theme.media.phone} {
    font-size: 60%;
  }
`;

export const Title = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;

  @media ${({ theme }) => theme.media.phone} {
    position: static;
    text-align: left;
  }
`;
