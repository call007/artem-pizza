import { mockState } from "../../mocks/mockStore";
import { OrderAction, orderReducer, OrderState } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_pizza", () => {
    it("sets pizza", () => {
      const initialState: OrderState = {};
      const action: OrderAction = {
        type: "set_pizza",
        payload: mockState.order.pizza,
      };
      expect(orderReducer(initialState, action)).toEqual<OrderState>({
        pizza: mockState.order.pizza,
      });
    });
  });

  describe("set_price", () => {
    it("sets price", () => {
      const initialState: OrderState = {};
      const action: OrderAction = {
        type: "set_price",
        payload: 1500,
      };
      expect(orderReducer(initialState, action)).toEqual<OrderState>({
        price: 1500,
      });
    });
  });
});
