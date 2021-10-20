import { Action, State } from "./types";
import { Option } from "./types/Option";

export function reducer(
  state: State,
  { type: actionType, payload: { id, value, price, type, name } }: Action
): State {
  switch (actionType) {
    case "add-option":
      const option: Option = {
        id,
        value,
        price,
        type,
      };

      return type === "checkbox"
        ? {
            ...state,
            pizza: {
              ...state.pizza,
              [name]: state.pizza[name].concat(option),
            },
            totalPrice: state.totalPrice + price,
          }
        : {
            ...state,
            pizza: {
              ...state.pizza,
              [name]: [option],
            },
            totalPrice: state.totalPrice - state.pizza[name][0]?.price + price,
          };

    case "remove-option":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          [name]: state.pizza[name].filter((option) => option.id !== id),
        },
        totalPrice: state.totalPrice - price,
      };

    default:
      throw new Error("Unknown action type");
  }
}
