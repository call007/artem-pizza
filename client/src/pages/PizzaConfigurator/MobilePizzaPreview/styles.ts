import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    position: sticky;
    z-index: ${theme.zIndex.panel};
    bottom: 0;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    padding: ${theme.space.sm} ${theme.space.base};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.outer.panel};
  `
);

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.space.base};
  animation: fadeIn ${(props) => props.theme.transitionDuration} forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }
`;

export const Summary = styled.div`
  flex-grow: 1;
  margin-right: ${(props) => props.theme.space.xl};
`;

export const Box = styled.div`
  margin-top: ${(props) => props.theme.space.xxs};
`;

export const PizzaWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 4rem;
  margin-right: ${(props) => `-${props.theme.space.base}`};
`;

export const Pizza = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
`;
