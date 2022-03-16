import { Ingredient } from "../types";

export const getIngredient = (
  pizzaIngredient: string,
  ingredients: Ingredient[]
) => ingredients.find((size) => size.slug === pizzaIngredient);
