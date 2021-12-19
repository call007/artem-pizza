import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { getPizzaIngredients } from "../../api";
import { AppDispatch, RootState } from "../../store";
import { setIngredientsDataAction, setIngredientsErrorAction } from "./actions";

export function fetchIngredients(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return (dispatch: AppDispatch) =>
    getPizzaIngredients().then(
      (ingredients) => {
        dispatch(setIngredientsDataAction(ingredients));
      },
      (error) => {
        dispatch(setIngredientsErrorAction(error));
      }
    );
}
