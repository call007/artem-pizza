import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { getPizzaIngredients } from "../../api";
import { AppDispatch, RootState } from "../../store";
import { ingredients } from "./reducer";

export function fetchIngredients(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return (dispatch: AppDispatch) =>
    getPizzaIngredients().then(
      (data) => {
        dispatch(ingredients.actions.setData(data));
      },
      (error) => {
        dispatch(ingredients.actions.setError(error));
      }
    );
}
