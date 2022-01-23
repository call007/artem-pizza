import { useSelector } from "react-redux";
import { OrderCard } from "../../../components";
import { getIngredientsByCategory } from "../../../state/ingredients/selectors";
import { getPizza } from "../../../state/order/selectors";
import { Category } from "../../../types";
import {
  getIngredient,
  getIngredients,
  getPizzaDoughText,
} from "../../../utils";

interface OrderPreviewProps {
  price: number;
  cardNumber?: string;
}

export function OrderPreview({ price, cardNumber }: OrderPreviewProps) {
  const pizza = useSelector(getPizza);

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauces = useSelector(getIngredientsByCategory(Category.Sauces));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  const pizzaSize = getIngredient(pizza.size, size)?.name;
  const pizzaDough = getPizzaDoughText(getIngredient(pizza.dough, dough)?.name);
  const pizzaSauces = getIngredient(pizza.sauces, sauces)?.name;
  const pizzaCheese = getIngredients(pizza.cheese, cheese).map(
    (ingredient) => ` • ${ingredient.name}`
  );
  const pizzaVegetables = getIngredients(pizza.vegetables, vegetables).map(
    (ingredient) => ` • ${ingredient.name}`
  );
  const pizzaMeat = getIngredients(pizza.meat, meat).map(
    (ingredient) => ` • ${ingredient.name}`
  );

  return (
    <OrderCard
      title="Твоя пицца"
      price={price}
      cardNumber={cardNumber}
      ingredients={`${pizzaSize} ${pizzaDough} • ${pizzaSauces} соус ${pizzaCheese} ${pizzaVegetables} ${pizzaMeat}`}
    />
  );
}
