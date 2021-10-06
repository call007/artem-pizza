import { Action, SelectedOption, State } from "./types";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add-option":
      const option: SelectedOption = {
        id: action.payload.id,
        value: action.payload.value,
        price: action.payload.price,
      };

      return action.payload.type === "checkbox"
        ? {
            ...state,
            fields: {
              ...state.fields,
              [action.payload.name]:
                state.fields[action.payload.name].concat(option),
            },
            totalPrice: state.totalPrice + (action.payload.price || 0),
          }
        : {
            ...state,
            fields: {
              ...state.fields,
              [action.payload.name]: [option],
            },
            totalPrice:
              state.totalPrice -
              (state.fields[action.payload.name][0]?.price || 0) +
              (action.payload.price || 0),
          };

    case "remove-option":
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: state.fields[action.payload.name].filter(
            (option) => option.id !== action.payload.id
          ),
        },
        totalPrice: state.totalPrice - (action.payload.price || 0),
      };

    default:
      throw new Error("Unknown action type");
  }
}
