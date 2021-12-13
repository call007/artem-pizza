import { getPizzaIngredients } from "../../api";
import { AppDispatch } from "../../store";

export function fetchIngredients() {
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
