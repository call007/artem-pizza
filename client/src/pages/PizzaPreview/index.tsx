import { Link, Redirect } from "react-router-dom";
import { PATH } from "../../consts";
import { useIngredientsContext } from "../../context/IngredientsContext";
import { usePizzaContext } from "../../context/PizzaContext";
import { Category, StateIngredient, StateIngredients } from "../../types";

export function PizzaPreview() {
  const { getIngredientsByCategory } = useIngredientsContext();
  const {
    state: { pizza, price },
  } = usePizzaContext();

  if (!pizza) {
    return <Redirect to={PATH.PizzaConfigurator} />;
  }

  function getIngredients(ingredients: StateIngredients, category: Category) {
    return ingredients
      ?.map(
        (stateIngredients) =>
          getIngredientsByCategory(category).find(
            (ingredient) => ingredient.slug === stateIngredients
          )?.name
      )
      .join(" • ");
  }

  return (
    <div>
      <h2>Твоя пицца</h2>

      <p>
        {getIngredients([pizza.size], Category.Size)}{" "}
        {getPizzaDoughText(getIngredients([pizza.dough], Category.Dough))}
      </p>

      <p>
        {getIngredients([pizza.sauces], Category.Sauces)} соус
        {pizza.cheese.length > 0 && " • "}
        {getIngredients(pizza.cheese, Category.Cheese)}
      </p>

      <p>{getIngredients(pizza.vegetables, Category.Vegetables)}</p>

      <p>{getIngredients(pizza.meat, Category.Meat)}</p>

      <Link to={PATH.Checkout}>Заказать за {price} руб</Link>
    </div>
  );
}

function getPizzaDoughText(dough?: StateIngredient) {
  switch (dough) {
    case "Тонкое":
      return "на тонком тесте";
    case "Пышное":
      return "на пышном тесте";
    default:
      return dough;
  }
}
