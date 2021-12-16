import { mockState } from "../../mocks/mockStore";
import { getPizza } from "./selectors";

describe("getPizza", () => {
  it("returns the pizza object from the state", () => {
    expect(getPizza(mockState)).toEqual(mockState.pizza);
  });
});
