import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { postOrder } from "../../api";
import { PATH } from "../../consts";
import { usePizzaContext } from "../../context/PizzaContext";
import { СheckoutForm, FormValues } from "./СheckoutForm";

export function Сheckout() {
  const history = useHistory();
  const {
    state: { pizza, price },
  } = usePizzaContext();
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

    console.log("orderData", orderData);

    postOrder(orderData)
      .then(() => history.push(PATH.CheckoutSuccess))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <h1>Оформление заказа</h1>

      <СheckoutForm formSubmit={handleSubmit} isLoading={isLoading} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
}
