import { Ingredient } from "../../../types";

export const getIngredient = (
  pizzaIngredient: string,
  ingredients: Ingredient[]
) => ingredients.find((size) => size.slug === pizzaIngredient);

export const getIngredients = (
  pizzaIngredients: string[],
  ingredients: Ingredient[]
) =>
  ingredients.filter((ingredient) =>
    pizzaIngredients.includes(ingredient.slug)
  );

export const getPizzaDoughText = (dough?: string) => {
  switch (dough) {
    case "Тонкое":
      return "на тонком тесте";
    case "Пышное":
      return "на пышном тесте";
    default:
      return dough;
  }
};
