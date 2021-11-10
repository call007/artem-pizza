import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
  useState,
} from "react";
import { data } from "./data";
import { reducer } from "./reducer";
import { Action, State } from "./types";

export const initialState: State = {
  pizza: {
    size: data.size[0].value,
    dough: data.dough[0].value,
    sauce: data.sauce[0].value,
    cheese: [],
    vegetables: [],
    meat: [],
  },
};

export const PizzaContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
    isPizzaBuilded: boolean;
    setIsPizzaBuilded: (value: boolean) => void;
  }
);

export const PizzaProvider = (props: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isPizzaBuilded, setIsPizzaBuilded] = useState(false);

  return (
    <PizzaContext.Provider
      value={{ state, dispatch, isPizzaBuilded, setIsPizzaBuilded }}
    >
      {props.children}
    </PizzaContext.Provider>
  );
};

export const usePizzaContext = () => useContext(PizzaContext);
