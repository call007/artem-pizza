import { Action, State, StatePizza } from "./types";

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case "update-pizza":
      return {
        ...state,
        pizza: payload as StatePizza,
      };

    default:
      throw new Error("Unknown action type");
  }
}
