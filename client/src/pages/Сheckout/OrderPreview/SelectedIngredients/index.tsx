import { useSelector } from "react-redux";
import { getIngredientsByCategory } from "../../../../state/ingredients/selectors";
import { getPizza } from "../../../../state/order/selectors";
import { Category } from "../../../../types";
import { Typography } from "../../../../ui-kit";
import {
  getIngredient,
  getIngredients,
  getPizzaDoughText,
} from "../../../../utils";
import * as Styled from "./styles";

export function SelectedIngredients() {
  const pizza = useSelector(getPizza);

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauces = useSelector(getIngredientsByCategory(Category.Sauces));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  return (
    <Styled.Container>
      <Typography size="xs" color={(color) => color.gray600}>
        {getIngredient(pizza.size, size)?.name}{" "}
        {getPizzaDoughText(getIngredient(pizza.dough, dough)?.name)}
        {" • "}
        {getIngredient(pizza.sauces, sauces)?.name} соус
        {getIngredients(pizza.cheese, cheese).map(
          (ingredient) => ` • ${ingredient.name}`
        )}
        {getIngredients(pizza.vegetables, vegetables).map(
          (ingredient) => ` • ${ingredient.name}`
        )}
        {getIngredients(pizza.meat, meat).map(
          (ingredient) => ` • ${ingredient.name}`
        )}
      </Typography>
    </Styled.Container>
  );
}
