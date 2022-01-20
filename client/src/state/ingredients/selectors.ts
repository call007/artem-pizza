import { RootState } from "../../store";
import { Category } from "../../types";

export const getIngredients = (state: RootState) => state.ingredients.data;

export const getIngredientsIsLoading = (state: RootState) =>
  state.ingredients.isLoading;

export const getIngredientsError = (state: RootState) =>
  state.ingredients.error;

export const getIngredientsByCategory =
  (category: Category) => (state: RootState) =>
    state.ingredients.data.filter(
      (ingredient) => ingredient.category === category
    );
