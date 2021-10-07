import { Action, SelectedOption, State } from "./types";

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case "add-option":
      const option: SelectedOption = {
        id: payload.id,
        value: payload.value,
        price: payload.price,
      };

      return payload.type === "checkbox"
        ? {
            ...state,
            pizza: {
              ...state.pizza,
              [payload.name]: state.pizza[payload.name].concat(option),
            },
            totalPrice: state.totalPrice + payload.price,
          }
        : {
            ...state,
            pizza: {
              ...state.pizza,
              [payload.name]: [option],
            },
            totalPrice:
              state.totalPrice -
              state.pizza[payload.name][0]?.price +
              payload.price,
          };

    case "remove-option":
      return {
        ...state,
        pizza: {
          ...state.pizza,
          [payload.name]: state.pizza[payload.name].filter(
            (option) => option.id !== payload.id
          ),
        },
        totalPrice: state.totalPrice - payload.price,
      };

    default:
      throw new Error("Unknown action type");
  }
}
