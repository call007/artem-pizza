import { RootState } from "../../../store";
import { Category } from "../../../types";

export const getIngredients = (state: RootState) =>
  state.ingredients.ingredients;

export const getIsLoading = (state: RootState) => state.ingredients.isLoading;

export const getError = (state: RootState) => state.ingredients.error;

export const getIngredientsByCategory =
  (category: Category) => (state: RootState) =>
    state.ingredients.ingredients.filter(
      (ingredient) => ingredient.category === category
    );
