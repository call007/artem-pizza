import { Pizza } from "../../types";

export type OrderState = {
  pizza?: Pizza;
  price?: number;
};

export type OrderAction =
  | {
      type: "set_pizza";
      payload: OrderState["pizza"];
    }
  | {
      type: "set_price";
      payload: OrderState["price"];
    };

export function orderReducer(
  state: OrderState = {},
  { type, payload }: OrderAction
): OrderState {
  switch (type) {
    case "set_pizza":
      return {
        ...state,
        pizza: payload as OrderState["pizza"],
      };

    case "set_price":
      return {
        ...state,
        price: payload as OrderState["price"],
      };

    default:
      return state;
  }
}
