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
  date: string;
  cardNumber?: string;
}

export function OrderPreview({ price, cardNumber, date }: OrderPreviewProps) {
  const pizza = useSelector(getPizza);

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauce = useSelector(getIngredientsByCategory(Category.Sauce));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  const pizzaSize = getIngredient(pizza.size, size)?.name;
  const pizzaDough = getPizzaDoughText(getIngredient(pizza.dough, dough)?.name);
  const pizzaSauce = getIngredient(pizza.sauce, sauce)?.name;

  const pizzaCheese = getIngredients(pizza.cheese, cheese)
    .map((ingredient) => ` • ${ingredient.name}`)
    .join("");

  const pizzaVegetables = getIngredients(pizza.vegetables, vegetables)
    .map((ingredient) => ` • ${ingredient.name}`)
    .join("");

  const pizzaMeat = getIngredients(pizza.meat, meat)
    .map((ingredient) => ` • ${ingredient.name}`)
    .join("");

  return (
    <OrderCard
      title="Твоя пицца"
      date={date}
      price={price}
      cardNumber={cardNumber}
      ingredients={`${pizzaSize} ${pizzaDough} • ${pizzaSauce} соус ${pizzaCheese} ${pizzaVegetables} ${pizzaMeat}`}
    />
  );
}
