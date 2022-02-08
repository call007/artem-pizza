import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { postOrder } from "../../api";
import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import { getPizza, getPizzaPrice } from "../../state/order/selectors";
import { Wrapper } from "../../ui-kit";
import { getDateNow } from "../../utils";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderPreview } from "./OrderPreview";
import { OrderSummary } from "./OrderSummary";
import * as Styled from "./styles";
import { FormValues, СheckoutForm } from "./СheckoutForm";
import { СheckoutSuccess } from "./СheckoutSuccess";

export function Сheckout() {
  const pizza = useSelector(getPizza);
  const price = useSelector(getPizzaPrice);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [cardNumber, setCardNumber] = useState<string>();
  const [isCeckoutSuccess, setIsCeckoutSuccess] = useState(false);
  const isPhone = useMediaPhone();
  const [date, setDate] = useState<string>(getDateNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getDateNow());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!price) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  if (isCeckoutSuccess) {
    return (
      <СheckoutSuccess price={price} cardNumber={cardNumber} date={date} />
    );
  }

  const handleSubmit = (data: FormValues) => {
    setIsLoading(true);

    const orderData = {
      date,
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
        setIsCeckoutSuccess(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(new Error(error));
      });
  };

  return (
    <>
      <CheckoutHeader />

      <Wrapper size="lg" as="main">
        <Styled.Container>
          <Styled.Content>
            <СheckoutForm
              onFormSubmit={handleSubmit}
              onCardNumberChange={(value) => setCardNumber(value)}
            />
          </Styled.Content>

          <Styled.Aside>
            <OrderPreview price={price} cardNumber={cardNumber} date={date} />
            {!isPhone && (
              <OrderSummary
                isLoading={isLoading}
                errorMessage={error?.message}
              />
            )}
          </Styled.Aside>
        </Styled.Container>
      </Wrapper>

      {isPhone && (
        <OrderSummary isLoading={isLoading} errorMessage={error?.message} />
      )}
    </>
  );
}
