import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { PATH } from "../../consts";
import { getPizza } from "../../state/pizza/selectors";
import { getIngredientsByCategory } from "../../state/reducers/ingredients/selectors";
import { Category, Ingredient } from "../../types";

export function PizzaPreview() {
  const { pizza, price } = useSelector(getPizza);
  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauces = useSelector(getIngredientsByCategory(Category.Sauces));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  if (!pizza) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  return (
    <div>
      <h2>Твоя пицца</h2>

      <p>
        {getIngredient(pizza.size, size)}{" "}
        {getPizzaDoughText(getIngredient(pizza.dough, dough))}
      </p>

      <p>
        {getIngredient(pizza.sauces, sauces)} соус
        {pizza.cheese.length > 0 && " • "}
        {getIngredients(pizza.cheese, cheese)}
      </p>

      <p>{getIngredients(pizza.vegetables, vegetables)}</p>

      <p>{getIngredients(pizza.meat, meat)}</p>

      <Link to={PATH.Checkout}>Заказать за {price} руб</Link>
    </div>
  );
}

function getIngredient(pizzaIngredient: string, ingredients: Ingredient[]) {
  return ingredients.find((size) => size.slug === pizzaIngredient)?.name;
}

function getIngredients(pizzaIngredients: string[], ingredients: Ingredient[]) {
  return pizzaIngredients
    .map(
      (pizzaIngredients) =>
        ingredients.find((ingredient) => pizzaIngredients === ingredient.slug)
          ?.name
    )
    .join(" • ");
}

function getPizzaDoughText(dough?: string) {
  switch (dough) {
    case "Тонкое":
      return "на тонком тесте";
    case "Пышное":
      return "на пышном тесте";
    default:
      return dough;
  }
}
