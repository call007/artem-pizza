import { createStore } from "redux";

type State = {
  some: string;
};

type Action = {
  type: "SOME";
  [key: string]: string;
};

function someReducer(state: State = { some: "" }, action: Action): State {
  switch (action.type) {
    case "SOME":
      return { some: action.value };
    default:
      return state;
  }
}

export const store = createStore(someReducer);
