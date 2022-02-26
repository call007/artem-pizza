import { mockDataIngredients } from "../mocks/mockDataIngredients";
import { calculatePrice } from "./calculatePrice";

describe("calculatePrice", () => {
  it("returns the sum price of all selected pizza parts", () => {
    expect(
      calculatePrice(
        {
          size: "30",
          dough: "lush",
          sauce: "tomato",
          cheese: ["cheddar", "dor-blue", "mozarella"],
          vegetables: ["broccoli", "mushrooms", "olives"],
          meat: ["bacon", "chicken", "ham"],
        },
        mockDataIngredients
      )
    ).toEqual(1150);
  });
});
