import { useEffect, useState } from "react";
import { ReactComponent as MasterCardIcon } from "../../images/mastercard.svg";
import { ReactComponent as VisaIcon } from "../../images/visa.svg";
import { useThemeContext } from "../../context";
import { PaymentSystem } from "../../types";
import { Plate, Typography, TypographySkeleton } from "../../ui-kit";
import { getPaymentSystem } from "../../utils";
import * as Styled from "./styles";

export type OrderCardSize = "sm" | "base";

interface OrderCardProps {
  title?: string;
  date?: string;
  price?: number;
  ingredients?: string;
  cardNumber?: string;
  size?: OrderCardSize;
  control?: JSX.Element;
}

export function OrderCard({
  title,
  date,
  price,
  ingredients,
  cardNumber,
  size = "sm",
  control,
}: OrderCardProps) {
  const [paymentSystem, setPaymentSystem] = useState<PaymentSystem>();
  const [last4DigitsOfPaymentSystem, setLast4DigitsOfPaymentSystem] =
    useState<string>();
  const { theme } = useThemeContext();

  useEffect(() => {
    setPaymentSystem(getPaymentSystem(cardNumber));

    setLast4DigitsOfPaymentSystem(
      cardNumber?.replace(/\s/g, "").length === 16
        ? cardNumber.slice(-4)
        : undefined
    );
  }, [cardNumber]);

  return (
    <Plate as={Styled.Plate}>
      <Styled.Header>
        <Typography
          size={size === "base" ? { all: "base", phone: "xs" } : "xs"}
          color={(color) => color.gray400}
          as={Styled.HeaderItem}
        >
          {date ?? <TypographySkeleton width="9.375rem" />}
        </Typography>
      </Styled.Header>

      <Typography
        size={size === "base" ? { all: "lg", phone: "base" } : "base"}
        weight="medium"
        component="h2"
      >
        {title ?? <TypographySkeleton width="70%" />}
      </Typography>

      <Styled.IngredientsBox size={size}>
        <Typography
          size={size === "base" ? { all: "sm", phone: "xs" } : "xs"}
          color={(color) => color.gray600}
        >
          {ingredients ?? <TypographySkeleton width="90%" />}
        </Typography>
      </Styled.IngredientsBox>

      <Styled.Footer>
        <Styled.FooterSummary>
          <Typography
            size={size === "base" ? { all: "base", phone: "sm" } : "sm"}
            weight="bold"
            as={Styled.Price}
          >
            {price ? `${price} руб` : <TypographySkeleton width="6.25rem" />}
          </Typography>

          {paymentSystem === PaymentSystem.Mastercard && (
            <Styled.PaymentIcon
              as={MasterCardIcon}
              aria-label={PaymentSystem.Mastercard}
            />
          )}

          {paymentSystem === PaymentSystem.Visa && (
            <Styled.PaymentIcon
              as={VisaIcon}
              aria-label={PaymentSystem.Visa}
              themeName={theme}
            />
          )}

          {last4DigitsOfPaymentSystem && (
            <Typography
              size={size === "base" ? { all: "base", phone: "sm" } : "sm"}
              component="span"
            >
              {last4DigitsOfPaymentSystem}
            </Typography>
          )}
        </Styled.FooterSummary>

        {control}
      </Styled.Footer>
    </Plate>
  );
}
