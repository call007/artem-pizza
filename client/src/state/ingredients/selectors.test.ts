import { mockState } from "../../mocks/mockStore";
import { RootState } from "../../store";
import { Category } from "../../types";
import {
  getError,
  getIngredients,
  getIngredientsByCategory,
  getIsLoading,
} from "./selectors";

describe("getIngredients", () => {
  it("returns the ingredients from the state", () => {
    expect(getIngredients(mockState)).toEqual(mockState.ingredients.data);
  });
});

describe("getIsLoading", () => {
  it("returns ingredients property 'isLoading' from the state", () => {
    expect(getIsLoading(mockState)).toEqual(false);
  });
});

describe("getError", () => {
  it("returns ingredients property 'error' from the state", () => {
    const state: RootState = { ...mockState };
    state.ingredients.error = new Error("Some error");

    expect(getError(state)).toEqual(new Error("Some error"));
  });
});

describe("getIngredientsByCategory", () => {
  it("returns the ingredients by category from the state", () => {
    expect(getIngredientsByCategory(Category.Meat)(mockState)).toEqual([
      {
        category: "meat",
        id: "Odd5HuC4",
        image: "bacon.png",
        name: "Бекон",
        price: 100,
        slug: "bacon",
        thumbnail: "bacon-thumb.png",
      },
      {
        category: "meat",
        id: "2T7Cta-s",
        image: "chicken.png",
        name: "Курица",
        price: 100,
        slug: "chicken",
        thumbnail: "chicken-thumb.png",
      },
    ]);
  });
});
