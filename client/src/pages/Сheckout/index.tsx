import { Redirect } from "react-router";
import { PATH } from "../../consts";
import { usePizzaContext } from "../../PizzaContext";
import { СheckoutForm } from "./СheckoutForm";

export function Сheckout() {
  const {
    state: { pizza, price },
  } = usePizzaContext();

  if (!pizza) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  return (
    <div>
      <h1>Оформление заказа</h1>

      <СheckoutForm
        formSubmit={(data) => console.log({ ...pizza, ...data, price })}
      />
    </div>
  );
}
