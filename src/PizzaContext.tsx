import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { data } from "./data";
import { reducer } from "./reducer";
import { Action, State } from "./types";

const initialState: State = {
  pizza: {
    size: [data.size[0]],
    dough: [data.dough[0]],
    sauce: [data.sauce[0]],
    cheese: [],
    vegetables: [],
    meat: [],
  },
  totalPrice: 200,
};

const PizzaContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
);

export const PizzaProvider = (props: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export const usePizzaContext = () => useContext(PizzaContext);
