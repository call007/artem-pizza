import { Action, pizzaReducer, State } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_pizza", () => {
    it("sets pizza", () => {
      const pizza: State["pizza"] = {
        size: "30см",
        dough: "Тонкое",
        sauces: "Томатный",
        cheese: ["Пармезан", "Дор-блю"],
        meat: [],
        vegetables: [],
      };
      const initialState: State = {};
      const action: Action = {
        type: "set_pizza",
        payload: pizza,
      };
      expect(pizzaReducer(initialState, action)).toEqual<State>({ pizza });
    });
  });

  describe("set_price", () => {
    it("sets price", () => {
      const initialState: State = {};
      const action: Action = {
        type: "set_price",
        payload: 1500,
      };
      expect(pizzaReducer(initialState, action)).toEqual<State>({
        price: 1500,
      });
    });
  });
});
