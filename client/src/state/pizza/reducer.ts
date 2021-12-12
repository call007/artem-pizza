import { Pizza } from "../../types";

type State = {
  pizza?: Pizza;
  price?: number;
};

type Action =
  | {
      type: "set_pizza";
      payload: State["pizza"];
    }
  | {
      type: "set_price";
      payload: State["price"];
    };

export function pizzaReducer(
  state: State = {},
  { type, payload }: Action
): State {
  switch (type) {
    case "set_pizza":
      return {
        ...state,
        pizza: payload as State["pizza"],
      };

    case "set_price":
      return {
        ...state,
        price: payload as State["price"],
      };

    default:
      return state;
  }
}
