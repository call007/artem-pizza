import styled from "styled-components";
import { variables } from "../../styles";

export const Container = styled.div`
  position: relative;
  margin: ${`-${variables.space.xxl} -${variables.space.base}`};
  padding: ${variables.space.xxl} 0;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  -ms-overflow-style: none;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 ${variables.space.base};
`;
