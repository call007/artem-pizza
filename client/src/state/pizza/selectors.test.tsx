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

    const state: RootState = {
      pizza: {
        pizza: pizza,
        price: 2000,
      },
      ingredients: {
        ingredients: [],
        isLoading: true,
      },
    };
    expect(getPizza(state)).toEqual(state.pizza);
  });
});
