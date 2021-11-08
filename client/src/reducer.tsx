import { Action, State, StatePizza } from "./types";

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case "update-pizza":
      return {
        ...state,
        pizza: payload as StatePizza,
      };

    case "update-price":
      return {
        ...state,
        totalPrice: payload as number,
      };

    default:
      throw new Error("Unknown action type");
  }
}
