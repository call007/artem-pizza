import { RootState } from "../../store";
import { State } from "./reducer";
import { getPizza } from "./selectors";

describe("getPizza", () => {
  it("returns the pizza object from the state", () => {
    const pizza: State["pizza"] = {
      size: "10cm",
      dough: "thin",
      sauces: "tomato",
      cheese: [],
      meat: [],
      vegetables: [],
    };

    const state: Partial<RootState> = {
      pizza: {
        pizza: pizza,
        price: 2000,
      },
    };
    expect(getPizza(state as any)).toEqual(state.pizza);
  });
});
