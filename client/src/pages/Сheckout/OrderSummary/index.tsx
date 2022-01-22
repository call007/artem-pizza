import { useSelector } from "react-redux";
import { getPizzaPrice } from "../../../state/order/selectors";
import { Button } from "../../../ui-kit";
import * as Styled from "./styles";

interface OrderSummaryProps {
  isLoading?: boolean;
}

const DELIVERY_PRICE = 180;

export function OrderSummary({ isLoading }: OrderSummaryProps) {
  const price = useSelector(getPizzaPrice);

  return (
    <Styled.Container>
      <Styled.Dl>
        <dt>Стоимость заказа</dt>
        <dd>{price} руб</dd>
      </Styled.Dl>

      <Styled.Dl>
        <dt>Доставка</dt>
        <dd>{DELIVERY_PRICE} руб</dd>
      </Styled.Dl>

      <Styled.Total>
        <Styled.Dl>
          <dt>К оплате</dt>
          <dd>{price && price + DELIVERY_PRICE} руб</dd>
        </Styled.Dl>
      </Styled.Total>

      <Button
        type="submit"
        form="checkout-form"
        size="large"
        isLong={true}
        isLoading={isLoading}
      >
        Оплатить {price} руб
      </Button>
    </Styled.Container>
  );
}
