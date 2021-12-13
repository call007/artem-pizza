import { Action, ingredientsReducer, State } from "./reducer";

describe("ingredientsReducer", () => {
  describe("set_ingredients", () => {
    it("sets ingredients", () => {
      const ingredients: State["ingredients"] = [
        {
          id: "Odd5HuC4",
          name: "Бекон",
          slug: "bacon",
          price: 100,
          category: "meat",
          image: "bacon.png",
          thumbnail: "bacon-thumb.png",
        },
      ];
      const initialState: State = {
        ingredients: [],
        isLoading: true,
      };
      const action: Action = {
        type: "set_ingredients",
        payload: ingredients,
      };
      expect(ingredientsReducer(initialState, action)).toEqual<State>({
        ingredients,
        isLoading: false,
      });
    });
  });

  describe("set_ingredients_error", () => {
    it("sets error", () => {
      const error = new Error("Some error");
      const initialState: State = {
        ingredients: [],
        isLoading: true,
      };
      const action: Action = {
        type: "set_ingredients_error",
        payload: error,
      };
      expect(ingredientsReducer(initialState, action)).toEqual<State>({
        error,
        ingredients: [],
        isLoading: false,
      });
    });
  });
});
