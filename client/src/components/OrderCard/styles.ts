import styled, { css } from "styled-components";
import { OrderCardSize } from ".";

export const PlateWrapper = styled.div`
  padding: ${(props) => props.theme.space.base};
`;

export const Header = styled.div`
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

export const PriceBox = styled.div`
  margin-right: ${(props) => props.theme.space.base};
`;

export const Footer = styled.div`
  display: flex;
  align-items: baseline;
  border-top: 1px dashed ${(props) => props.theme.colors.gray200};
  margin-top: ${(props) => props.theme.space.base};
  padding-top: ${(props) => props.theme.space.base};
`;

export const PaymentIcon = styled.svg`
  align-self: center;
  width: 1.5rem;
  height: 0.938rem;
  margin-right: ${(props) => props.theme.space.xxxs};
`;
