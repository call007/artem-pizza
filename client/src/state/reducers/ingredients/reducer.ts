import { Ingredient } from "../../../types";

export type State = {
  ingredients: Ingredient[];
  isLoading: boolean;
  error?: Error;
};

type Action =
  | {
      type: "set_ingredients";
      payload: Ingredient[];
    }
  | {
      type: "set_ingredients_error";
      payload: Error;
    };

const initialState: State = {
  ingredients: [],
  isLoading: true,
};

export function ingredientsReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case "set_ingredients":
      return { ingredients: action.payload, isLoading: false };

    case "set_ingredients_error":
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}
