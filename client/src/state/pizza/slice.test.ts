import { mockState } from "../../mocks/mockStore";
import { orderSlice, OrderState } from "./slice";

describe("pizzaReducer", () => {
  describe("set_pizza", () => {
    it("sets pizza", () => {
      const initialState: OrderState = {};
      const action = orderSlice.actions.setPizza(mockState.order.pizza);
      expect(orderSlice.reducer(initialState, action)).toEqual<OrderState>({
        pizza: mockState.order.pizza,
      });
    });
  });

  describe("set_price", () => {
    it("sets price", () => {
      const initialState: OrderState = {};
      const action = orderSlice.actions.setPrice(1500);
      expect(orderSlice.reducer(initialState, action)).toEqual<OrderState>({
        price: 1500,
      });
    });
  });
});
