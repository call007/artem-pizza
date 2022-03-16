import { Ingredient } from "../types";

export const getIngredients = (
  pizzaIngredients: string[],
  ingredients: Ingredient[]
) =>
  ingredients.filter((ingredient) =>
    pizzaIngredients.includes(ingredient.slug)
  );
