import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { postOrder } from "../../api";
import { PATH } from "../../consts";
import { getPizza, getPizzaPrice } from "../../state/pizza/selectors";
import { userSlice } from "../../state/user/slice";
import { Button, Header } from "../../ui-kit";
import { FormValues, СheckoutForm } from "./СheckoutForm";

export function Сheckout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pizza = useSelector(getPizza);
  const price = useSelector(getPizzaPrice);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  if (!pizza) {
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

      <СheckoutForm formSubmit={handleSubmit} isLoading={isLoading} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
}
