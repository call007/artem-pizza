import styled, { css } from "styled-components";
import { OrderCardSize } from ".";
import { mixins, variables } from "../../styles";
import { PaymentSystem, Themes } from "../../types";

export const Plate = styled.section`
  padding: ${variables.space.base};
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: ${variables.space.base};
`;

export const HeaderItem = styled.span`
  &:not(:first-child) {
    margin-left: ${variables.space.base};
  }
`;

type IngredientsBoxProps = {
  size: OrderCardSize;
};

export const IngredientsBox = styled.div<IngredientsBoxProps>`
  margin-top: ${variables.space.xxs};

  ${(props) =>
    props.size === "base" &&
    css`
      @media ${variables.media.desktop}, ${variables.media.tablet} {
        margin-top: ${variables.space.xs};
      }
    `};
`;

export const Price = styled.span`
  margin-right: ${variables.space.base};
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px dashed ${(props) => props.theme.colors.gray200};
  margin-top: ${variables.space.base};
  padding-top: ${variables.space.base};
  transition: border-top-color ${variables.transitionDuration};
`;

type PaymentIconProps = {
  themeName?: Themes;
};

export const PaymentIcon = styled.svg.withConfig<PaymentIconProps>({
  shouldForwardProp: (prop) => prop !== "themeName",
})`
  ${mixins.fadeIn};
  align-self: center;
  width: 1.5rem;
  height: 0.938rem;
  margin-right: ${variables.space.xxxs};

  &[aria-label="${PaymentSystem.Visa}"] {
    filter: ${(props) =>
      props.themeName === "dark" && "brightness(3.5) contrast(2)"};
  }
`;

export const FooterSummary = styled.div`
  display: inherit;
  align-items: inherit;
  flex-grow: 1;
  padding: ${variables.space.xxs} 0;
  padding-right: ${variables.space.base};
`;
