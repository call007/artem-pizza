import { ThunkAction } from "redux-thunk";
import { getPizzaIngredients } from "../../api";
import { AppDispatch, RootState } from "../../store";
import { IngredientsAction } from "./reducer";

export function fetchIngredients(): ThunkAction<
  void,
  RootState,
  unknown,
  IngredientsAction
> {
  return (dispatch: AppDispatch) =>
    getPizzaIngredients().then(
      (ingredients) => {
        dispatch({ type: "set_ingredients", payload: ingredients });
      },
      (error) => {
        dispatch({
          type: "set_ingredients_error",
          payload: error,
        });
      }
    );
}
