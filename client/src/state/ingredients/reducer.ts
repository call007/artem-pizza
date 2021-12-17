import { Ingredient } from "../../types";

export type IngredientsState = {
  data: Ingredient[];
  isLoading: boolean;
  error?: Error;
};

export type IngredientsAction =
  | {
      type: "set_ingredients";
      payload: Ingredient[];
    }
  | {
      type: "set_ingredients_error";
      payload: Error;
    };

const initialState: IngredientsState = {
  data: [],
  isLoading: true,
};

export function ingredientsReducer(
  state: IngredientsState = initialState,
  action: IngredientsAction
): IngredientsState {
  switch (action.type) {
    case "set_ingredients":
      return { data: action.payload, isLoading: false };

    case "set_ingredients_error":
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
