import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { postOrder } from "../../api";
import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import { getPizza, getPizzaPrice } from "../../state/order/selectors";
import { userSlice } from "../../state/user/slice";
import { Button, Header, Wrapper } from "../../ui-kit";
import { OrderPreview } from "./OrderPreview";
import { OrderSummary } from "./OrderSummary";
import * as Styled from "./styles";
import { FormValues, СheckoutForm } from "./СheckoutForm";

export function Сheckout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pizza = useSelector(getPizza);
  const price = useSelector(getPizzaPrice);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [cardNumber, setCardNumber] = useState<string>();
  const isPhone = useMediaPhone();

  if (!price) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  const handleSubmit = (data: FormValues) => {
    setIsLoading(true);

    const orderData = {
      name: data.name,
      address: `${data.address}, кв. ${data.apartment}, подъезд ${data.entrance}, этаж ${data.floor}`,
      card_number: data.card_number,
      dough: pizza.dough,
      size: Number(pizza.size),
      sauce: pizza.sauces,
      ingredients: [...pizza.cheese, ...pizza.meat, ...pizza.vegetables],
      price: price || 0,
    };

    postOrder(orderData)
      .then(() => {
        setIsLoading(false);
        dispatch(userSlice.actions.setIsCheckoutSuccess(true));
        history.push(PATH.CheckoutSuccess);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  return (
    <>
      <Header title="Оформление заказа">
        <Button to={PATH.PizzaConfigurator} view="ghost" icon="error" />
      </Header>

      <Wrapper size="lg" as="main">
        <Styled.Container>
          <Styled.Content>
            <СheckoutForm
              onFormSubmit={handleSubmit}
              onCardNumberChange={(value) => setCardNumber(value)}
            />
          </Styled.Content>

          <Styled.Aside>
            <OrderPreview price={price} cardNumber={cardNumber} />
            {!isPhone && <OrderSummary isLoading={isLoading} />}
          </Styled.Aside>
        </Styled.Container>

        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </Wrapper>

      {isPhone && <OrderSummary isLoading={isLoading} />}
    </>
  );
}
