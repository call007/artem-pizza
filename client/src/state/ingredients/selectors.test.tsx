import { RootState } from "../../store";
import { Category, Ingredient } from "../../types";
import {
  getError,
  getIngredients,
  getIngredientsByCategory,
  getIsLoading,
} from "./selectors";

describe("getIngredients", () => {
  it("returns the ingredients from the state", () => {
    const ingredient: Ingredient = {
      id: "Odd5HuC4",
      name: "Бекон",
      slug: "bacon",
      price: 100,
      category: "meat",
    };

    const state: RootState = {
      pizza: {
        price: 2000,
      },
      ingredients: {
        ingredients: [ingredient],
        isLoading: true,
      },
    };
    expect(getIngredients(state)).toEqual([ingredient]);
  });
});

describe("getIsLoading", () => {
  it("returns ingredients property 'isLoading' from the state", () => {
    const state: RootState = {
      pizza: {
        price: 2000,
      },
      ingredients: {
        ingredients: [],
        isLoading: true,
      },
    };
    expect(getIsLoading(state)).toEqual(true);
  });
});

describe("getError", () => {
  it("returns ingredients property 'error' from the state", () => {
    const state: RootState = {
      pizza: {
        price: 2000,
      },
      ingredients: {
        ingredients: [],
        isLoading: true,
        error: new Error("Some error"),
      },
    };
    expect(getError(state)).toEqual(new Error("Some error"));
  });
});

describe("getIngredientsByCategory", () => {
  it("returns the ingredients by category from the state", () => {
    const ingredients: Ingredient[] = [
      {
        id: "Odd5HuC4",
        name: "Бекон",
        slug: "bacon",
        price: 100,
        category: "meat",
      },
      {
        id: "xXibhlsf",
        name: "Брокколи",
        slug: "broccoli",
        price: 100,
        category: "vegetables",
      },
    ];

    const state: RootState = {
      pizza: {
        price: 2000,
      },
      ingredients: {
        ingredients: ingredients,
        isLoading: true,
      },
    };
    expect(getIngredientsByCategory(Category.Meat)(state)).toEqual([
      {
        id: "Odd5HuC4",
        name: "Бекон",
        slug: "bacon",
        price: 100,
        category: "meat",
      },
    ]);
  });
});
