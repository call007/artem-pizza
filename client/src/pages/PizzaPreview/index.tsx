import { Link, Redirect } from "react-router-dom";
import { usePizzaContext } from "../../PizzaContext";
import { Path } from "../../consts";
import { StateOption, StateOptions } from "../../types";

export function PizzaPreview() {
  const {
    state: { pizza, totalPrice },
    isPizzaBuilded,
  } = usePizzaContext();

  if (!isPizzaBuilded) {
    return <Redirect to={Path.PizzaConfigurator} />;
  }

  return (
    <div>
      <h2>Твоя пицца</h2>

      <p>
        {pizza.size} {getPizzaDoughText(pizza.dough)}
      </p>

      <p>
        {pizza.sauce} соус
        {pizza.cheese.length > 0 && " • "}
        {getOptions(pizza.cheese)}
      </p>

      <p>{getOptions(pizza.vegetables)}</p>

      <p>{getOptions(pizza.meat)}</p>

      <Link to={Path.Checkout}>Заказать за {totalPrice} руб</Link>
    </div>
  );
}

function getOptions(options: StateOptions) {
  return options.join(" • ");
}

function getPizzaDoughText(dough: StateOption) {
  switch (dough) {
    case "Тонкое":
      return "на тонком тесте";
    case "Пышное":
      return "на пышном тесте";
    default:
      return dough;
  }
}
