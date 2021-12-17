import { mockState } from "../../mocks/mockStore";
import { getPizza, getPizzaPrice } from "./selectors";

describe("getPizza", () => {
  it("returns the pizza object from the state", () => {
    expect(getPizza(mockState)).toEqual(mockState.order.pizza);
  });
});

describe("getPizzaPrice", () => {
  it("returns the pizza price from the state", () => {
    expect(getPizzaPrice(mockState)).toEqual(mockState.order.price);
  });
});
