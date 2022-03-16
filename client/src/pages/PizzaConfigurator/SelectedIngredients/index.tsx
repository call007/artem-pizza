import { useSelector } from "react-redux";
import { getIngredientsByCategory } from "../../../state/ingredients/selectors";
import { getPizza } from "../../../state/order/selectors";
import { Category } from "../../../types";
import { Typography, TypographySkeleton } from "../../../ui-kit";
import {
  getIngredient,
  getIngredients,
  getPizzaDoughText,
} from "../../../utils";
import * as Styled from "./styles";

interface SelectedIngredientsProps {
  isLoading?: boolean;
}

export function SelectedIngredients({ isLoading }: SelectedIngredientsProps) {
  const pizza = useSelector(getPizza);

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauce = useSelector(getIngredientsByCategory(Category.Sauce));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  return (
    <>
      <Typography
        size={{ all: "sm", phone: "xs" }}
        color={(color) => color.gray600}
        as={Styled.Box}
      >
        {isLoading ? (
          <TypographySkeleton width="9.063rem" />
        ) : (
          <>
            {getIngredient(pizza.size, size)?.name}{" "}
            {getPizzaDoughText(getIngredient(pizza.dough, dough)?.name)}
          </>
        )}
      </Typography>

      <Typography
        size={{ all: "sm", phone: "xs" }}
        color={(color) => color.gray600}
      >
        {isLoading ? (
          <TypographySkeleton width="11.25rem" />
        ) : (
          <>
            {getIngredient(pizza.sauce, sauce)?.name} соус
            {getIngredients(pizza.cheese, cheese).map(
              (ingredient) => ` • ${ingredient.name}`
            )}
            {getIngredients(pizza.vegetables, vegetables).map(
              (ingredient) => ` • ${ingredient.name}`
            )}
            {getIngredients(pizza.meat, meat).map(
              (ingredient) => ` • ${ingredient.name}`
            )}
          </>
        )}
      </Typography>
    </>
  );
}
