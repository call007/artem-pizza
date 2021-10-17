import { Link } from "react-router-dom";
import { usePizzaContext } from "../../PizzaContext";
import { Option, Path } from "../../types";

export function PizzaPreview() {
  const {
    state: { pizza, totalPrice },
  } = usePizzaContext();

  return (
    <div>
      <h2>Твоя пицца</h2>

      <p>
        {getOptions(pizza.size)}{" "}
        {pizza.dough.map((item) => {
          switch (item.id) {
            case 0:
              return "на тонком тесте";
            case 1:
              return "на пышном тесте";
            default:
              return item.value;
          }
        })}
      </p>
      <p>
        {getOptions(pizza.sauce)} соус
        {!!pizza.cheese.length && " • "}
        {getOptions(pizza.cheese)}
      </p>
      <p>{getOptions(pizza.vegetables)}</p>
      <p>{getOptions(pizza.meat)}</p>

      <Link to={Path.Checkout}>Заказать за {totalPrice} руб</Link>
    </div>
  );
}

function getOptions(options: Option[]) {
  return options.map((item) => item.value).join(" • ");
}
