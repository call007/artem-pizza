import { mockState } from "../../mocks/mockStore";
import {
  IngredientsAction,
  ingredientsReducer,
  IngredientsState,
} from "./reducer";

describe("ingredientsReducer", () => {
  describe("set_ingredients", () => {
    it("sets ingredients", () => {
      const initialState: IngredientsState = {
        ingredients: [],
        isLoading: true,
      };
      const action: IngredientsAction = {
        type: "set_ingredients",
        payload: mockState.ingredients.ingredients,
      };

      expect(
        ingredientsReducer(initialState, action)
      ).toEqual<IngredientsState>({
        ingredients: mockState.ingredients.ingredients,
        isLoading: false,
      });
    });
  });

  describe("set_ingredients_error", () => {
    it("sets error", () => {
      const error = new Error("Some error");
      const initialState: IngredientsState = {
        ingredients: [],
        isLoading: true,
      };
      const action: IngredientsAction = {
        type: "set_ingredients_error",
        payload: error,
      };

      expect(
        ingredientsReducer(initialState, action)
      ).toEqual<IngredientsState>({
        error,
        ingredients: [],
        isLoading: false,
      });
    });
  });
});
