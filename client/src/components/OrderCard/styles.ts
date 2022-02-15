import styled, { css } from "styled-components";
import { OrderCardSize } from ".";

export const Plate = styled.section`
  padding: ${(props) => props.theme.space.base};
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.space.base};
`;

export const HeaderItem = styled.span`
  &:not(:first-child) {
    margin-left: ${(props) => props.theme.space.base};
  }
`;

type IngredientsBoxProps = {
  size: OrderCardSize;
};

export const IngredientsBox = styled.div<IngredientsBoxProps>(
  ({ theme, size }) => css`
    margin-top: ${theme.space.xxs};

    ${size === "base" &&
    css`
      @media ${theme.media.desktop}, ${theme.media.tablet} {
        margin-top: ${theme.space.xs};
      }
    `};
  `
);

export const Price = styled.span`
  margin-right: ${(props) => props.theme.space.base};
`;

export const Footer = styled.footer(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-top: 1px dashed ${theme.colors.gray200};
    margin-top: ${theme.space.base};
    padding-top: ${theme.space.base};
  `
);

export const PaymentIcon = styled.svg`
  align-self: center;
  width: 1.5rem;
  height: 0.938rem;
  margin-right: ${(props) => props.theme.space.xxxs};
`;

export const FooterSummary = styled.div`
  display: inherit;
  align-items: inherit;
  flex-grow: 1;
  padding: ${(props) => props.theme.space.xxs} 0;
  padding-right: ${(props) => props.theme.space.base};
`;
