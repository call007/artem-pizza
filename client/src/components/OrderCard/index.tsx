import { useEffect, useState } from "react";
import { ReactComponent as MasterCardIcon } from "../../images/mastercard.svg";
import { ReactComponent as VisaIcon } from "../../images/visa.svg";
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
  isLoading?: boolean;
}

export function OrderCard({
  title,
  date,
  price,
  ingredients,
  cardNumber,
  size = "sm",
  isLoading,
}: OrderCardProps) {
  const [paymentSystem, setPaymentSystem] = useState<PaymentSystem>();
  const [last4DigitsOfPaymentSystem, setLast4DigitsOfPaymentSystem] =
    useState<string>();

  useEffect(() => {
    setPaymentSystem(getPaymentSystem(cardNumber));

    setLast4DigitsOfPaymentSystem(
      cardNumber?.replace(/\s/g, "").length === 16
        ? cardNumber.slice(-4)
        : undefined
    );
  }, [cardNumber]);

  return (
    <Plate as="section">
      <Styled.PlateWrapper>
        <Styled.Header>
          <Typography
            size={size === "base" ? { all: "base", phone: "xs" } : "xs"}
            color={(color) => color.gray400}
            component="span"
          >
            {isLoading ? <TypographySkeleton width="9.375rem" /> : date}
          </Typography>
        </Styled.Header>

        <Typography
          size={size === "base" ? { all: "lg", phone: "base" } : "base"}
          weight="medium"
          component="h2"
        >
          {isLoading ? <TypographySkeleton width="70%" /> : title}
        </Typography>

        <Styled.IngredientsBox size={size}>
          <Typography
            size={size === "base" ? { all: "sm", phone: "xs" } : "xs"}
            color={(color) => color.gray600}
          >
            {isLoading || !ingredients ? (
              <TypographySkeleton width="90%" />
            ) : (
              ingredients
            )}
          </Typography>
        </Styled.IngredientsBox>

        <Styled.Footer>
          <Styled.PriceBox>
            <Typography
              size={size === "base" ? { all: "base", phone: "sm" } : "sm"}
              weight="bold"
            >
              {isLoading ? (
                <TypographySkeleton width="6.25rem" />
              ) : (
                `${price} руб`
              )}
            </Typography>
          </Styled.PriceBox>

          {paymentSystem === PaymentSystem.Mastercard && (
            <Styled.PaymentIcon
              as={MasterCardIcon}
              aria-label={PaymentSystem.Mastercard}
            />
          )}
          {paymentSystem === PaymentSystem.Visa && (
            <Styled.PaymentIcon as={VisaIcon} aria-label={PaymentSystem.Visa} />
          )}

          {last4DigitsOfPaymentSystem && (
            <Typography
              size={size === "base" ? { all: "base", phone: "sm" } : "sm"}
              component="span"
            >
              {last4DigitsOfPaymentSystem}
            </Typography>
          )}
        </Styled.Footer>
      </Styled.PlateWrapper>
    </Plate>
  );
}
