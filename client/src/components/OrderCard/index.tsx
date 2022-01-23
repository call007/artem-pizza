import { useEffect, useState } from "react";
import { ReactComponent as MasterCardIcon } from "../../images/mastercard.svg";
import { ReactComponent as VisaIcon } from "../../images/visa.svg";
import { PaymentSystem } from "../../types";
import { Plate, Typography } from "../../ui-kit";
import { getPaymentSystem } from "../../utils";
import * as Styled from "./styles";

interface OrderCardProps {
  title: string;
  price: number;
  ingredients: string;
  cardNumber?: string;
}

export function OrderCard({
  title,
  price,
  ingredients,
  cardNumber,
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
        <Typography weight="medium" component="h2">
          {title}
        </Typography>

        <Styled.Ingredients>{ingredients}</Styled.Ingredients>

        <Styled.Footer>
          <Styled.Price>{price} руб</Styled.Price>

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
            <Typography size="sm" component="span">
              {last4DigitsOfPaymentSystem}
            </Typography>
          )}
        </Styled.Footer>
      </Styled.PlateWrapper>
    </Plate>
  );
}
