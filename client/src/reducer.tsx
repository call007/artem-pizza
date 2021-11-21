import { Action, State } from "./types";

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case "update-pizza":
      return {
        ...state,
        pizza: payload as State["pizza"],
      };

    case "update-price":
      return {
        ...state,
        price: payload as State["price"],
      };

    default:
      throw new Error("Unknown action type");
  }
}
