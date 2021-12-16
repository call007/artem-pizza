import { Pizza } from "../../types";

export type PizzaState = {
  pizza?: Pizza;
  price?: number;
};

export type PizzaAction =
  | {
      type: "set_pizza";
      payload: PizzaState["pizza"];
    }
  | {
      type: "set_price";
      payload: PizzaState["price"];
    };

export function pizzaReducer(
  state: PizzaState = {},
  { type, payload }: PizzaAction
): PizzaState {
  switch (type) {
    case "set_pizza":
      return {
        ...state,
        pizza: payload as PizzaState["pizza"],
      };

    case "set_price":
      return {
        ...state,
        price: payload as PizzaState["price"],
      };

    default:
      return state;
  }
}
