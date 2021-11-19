import { Link, Redirect } from "react-router-dom";
import { usePizzaContext } from "../../PizzaContext";
import { PATH } from "../../consts";
import { StateIngredient, StateIngredients } from "../../types";

export function PizzaPreview() {
  const {
    state: { pizza, price },
  } = usePizzaContext();

  if (!pizza) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  return (
    <div>
      <h2>Твоя пицца</h2>

      <p>
        {pizza.size} {getPizzaDoughText(pizza.dough)}
      </p>

      <p>
        {pizza.sauces} соус
        {pizza.cheese.length > 0 && " • "}
        {getOptions(pizza.cheese)}
      </p>

      <p>{getOptions(pizza.vegetables)}</p>

      <p>{getOptions(pizza.meat)}</p>

      <Link to={PATH.Checkout}>Заказать за {price} руб</Link>
    </div>
  );
}

function getOptions(options: StateIngredients) {
  return options.join(" • ");
}

function getPizzaDoughText(dough: StateIngredient) {
  switch (dough) {
    case "Тонкое":
      return "на тонком тесте";
    case "Пышное":
      return "на пышном тесте";
    default:
      return dough;
  }
}
