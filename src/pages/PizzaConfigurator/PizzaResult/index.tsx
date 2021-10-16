import { Link } from "react-router-dom";
import { Path } from "../../../types";
import { Option, Options } from "../types";

interface Props {
  fields: Options;
  totalPrice: number;
}

const getOptions = (options: Option[]) =>
  options.map((item, index) => (
    <span key={item.id}>
      {index !== 0 && " • "}
      {item.value}
    </span>
  ));

export function PizzaResult({ fields, ...props }: Props) {
  return (
    <div>
      <h2>Твоя пицца</h2>

      <p>
        {getOptions(fields.size)}{" "}
        {fields.dough.map((item) => {
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
        {getOptions(fields.sauce)} соус
        {!!fields.cheese.length && " • "}
        {getOptions(fields.cheese)}
      </p>
      <p>{getOptions(fields.vegetables)}</p>
      <p>{getOptions(fields.meat)}</p>

      <Link to={Path.CHECKOUT}>Заказать за {props.totalPrice} руб</Link>
    </div>
  );
}
