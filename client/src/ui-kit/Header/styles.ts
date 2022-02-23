import styled from "styled-components";
import { variables } from "../../styles";
import { LazyImage } from "../LazyImage";

export const Container = styled.header`
  // for old browsers
  position: relative;
  position: sticky;
  z-index: ${variables.zIndex.header};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${variables.header.height};
  margin-bottom: ${variables.header.marginBottom};
  padding: ${variables.space.base};
  font-size: 1rem;
  box-shadow: ${(props) => props.theme.shadow.outer.md};
  background-color: ${(props) => props.theme.colors.white};

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

  @media ${variables.media.phone} {
    height: auto;
    margin-bottom: ${variables.space.base};
    padding: ${`${variables.space.xs} ${variables.space.xs} ${variables.space.xs} ${variables.space.base}`};
  }
`;

export const Logo = styled(LazyImage)`
  width: 16.188em;
  height: 2.5em;

  @media ${variables.media.phone} {
    font-size: 60%;
  }
`;

export const Title = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;

  @media ${variables.media.phone} {
    position: static;
    text-align: left;
  }
`;
