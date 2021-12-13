import { calculatePrice } from "./calculatePrice";
import { mockData } from "./mocks/mockData";

describe("calculatePrice", () => {
  it("returns the sum price of all selected pizza parts", () => {
    expect(
      calculatePrice(
        {
          size: "30",
          dough: "lush",
          sauces: "tomato",
          cheese: ["cheddar", "dor-blue", "mozarella"],
          vegetables: ["broccoli", "mushrooms", "olives"],
          meat: ["bacon", "chicken", "ham"],
        },
        mockData
      )
    ).toEqual(1150);
  });
});
