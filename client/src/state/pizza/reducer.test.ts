import { mockState } from "../../mocks/mockStore";
import { order, OrderState } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_pizza", () => {
    it("sets pizza", () => {
      const initialState: OrderState = {};
      const action = order.actions.setPizza(mockState.order.pizza);
      expect(order.reducer(initialState, action)).toEqual<OrderState>({
        pizza: mockState.order.pizza,
      });
    });
  });

  describe("set_price", () => {
    it("sets price", () => {
      const initialState: OrderState = {};
      const action = order.actions.setPrice(1500);
      expect(order.reducer(initialState, action)).toEqual<OrderState>({
        price: 1500,
      });
    });
  });
});
