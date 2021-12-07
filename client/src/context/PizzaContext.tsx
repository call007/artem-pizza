import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Action, State } from "../types";
import { pizzaReducer } from "./PizzaReducer";

export const initialState: State = {};

export const PizzaContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
);

export const PizzaProvider = (props: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(pizzaReducer, initialState);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PizzaContext.Provider>
  );
};

export const usePizzaContext = () => useContext(PizzaContext);
