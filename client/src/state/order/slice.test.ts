import { mockState } from "../../mocks/mockStore";
import { orderSlice, OrderState } from "./slice";

const initialState: OrderState = {
  pizza: {
    size: "30",
    dough: "thin",
    sauce: "tomato",
    cheese: [],
    vegetables: [],
    meat: [],
  },
};

describe("pizzaReducer", () => {
  describe("set_pizza", () => {
    it("sets pizza", () => {
      const action = orderSlice.actions.setPizza(mockState.order.pizza);
      expect(orderSlice.reducer(initialState, action)).toEqual<OrderState>({
        pizza: mockState.order.pizza,
      });
    });
  });

  describe("set_price", () => {
    it("sets price", () => {
      const action = orderSlice.actions.setPrice(1500);
      expect(orderSlice.reducer(initialState, action)).toEqual<OrderState>({
        ...initialState,
        price: 1500,
      });
    });
  });
});
