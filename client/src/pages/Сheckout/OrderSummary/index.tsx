import { Button, Typography } from "../../../ui-kit";
import * as Styled from "./styles";

interface OrderSummaryProps {
  price: number;
  deliveryPrice: number;
  isLoading?: boolean;
  errorMessage?: string;
}

export function OrderSummary({
  isLoading,
  errorMessage,
  price,
  deliveryPrice,
}: OrderSummaryProps) {
  return (
    <Styled.Container>
      <Styled.Dl>
        <dt>Стоимость заказа</dt>
        <dd>{price} руб</dd>
      </Styled.Dl>

      <Styled.Dl>
        <dt>Доставка</dt>
        <dd>{deliveryPrice} руб</dd>
      </Styled.Dl>

      <Styled.Total>
        <Styled.Dl>
          <dt>К оплате</dt>
          <dd>{price + deliveryPrice} руб</dd>
        </Styled.Dl>
      </Styled.Total>

      <Button
        type="submit"
        form="checkout-form"
        size="large"
        isLong={true}
        isLoading={isLoading}
      >
        Оплатить {price + deliveryPrice} руб
      </Button>

      {errorMessage && (
        <Typography
          size={{ all: "base", phone: "sm" }}
          color={(color) => color.statusError}
          as={Styled.Error}
        >
          {errorMessage}
        </Typography>
      )}
    </Styled.Container>
  );
}
