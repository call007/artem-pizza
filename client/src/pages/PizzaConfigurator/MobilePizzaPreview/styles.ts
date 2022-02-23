import styled, { css } from "styled-components";
import { mixins, variables } from "../../../styles";

export const Container = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    position: sticky;
    z-index: ${variables.zIndex.panel};
    bottom: 0;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    padding: ${variables.space.sm} ${variables.space.base};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.outer.panel};
  `
);

export const Wrapper = styled.div`
  ${mixins.fadeIn};
  display: flex;
  margin-bottom: ${variables.space.base};
`;

export const Summary = styled.div`
  flex-grow: 1;
  margin-right: ${variables.space.xl};
`;

export const Box = styled.div`
  margin-top: ${variables.space.xxs};
`;

export const PizzaWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 4rem;
  margin-right: -${variables.space.base};
`;

export const Pizza = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
`;
