import { mockState } from "../../mocks/mockStore";
import { PizzaAction, pizzaReducer, PizzaState } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_pizza", () => {
    it("sets pizza", () => {
      const initialState: PizzaState = {};
      const action: PizzaAction = {
        type: "set_pizza",
        payload: mockState.pizza.pizza,
      };
      expect(pizzaReducer(initialState, action)).toEqual<PizzaState>({
        pizza: mockState.pizza.pizza,
      });
    });
  });

  describe("set_price", () => {
    it("sets price", () => {
      const initialState: PizzaState = {};
      const action: PizzaAction = {
        type: "set_price",
        payload: 1500,
      };
      expect(pizzaReducer(initialState, action)).toEqual<PizzaState>({
        price: 1500,
      });
    });
  });
});
