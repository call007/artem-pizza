import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: ${(props) => `-${props.theme.space.xxl} -${props.theme.space.base}`};
  padding: ${(props) => props.theme.space.xxl} 0;
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
  padding: 0 ${(props) => props.theme.space.base};
`;
