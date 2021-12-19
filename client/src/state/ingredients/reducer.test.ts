import { mockState } from "../../mocks/mockStore";
import { ingredients, IngredientsState } from "./reducer";

describe("ingredientsReducer", () => {
  describe("set_ingredients", () => {
    it("sets ingredients", () => {
      const initialState: IngredientsState = {
        data: [],
        isLoading: true,
      };
      const action = ingredients.actions.setData(mockState.ingredients.data);

      expect(
        ingredients.reducer(initialState, action)
      ).toEqual<IngredientsState>({
        data: mockState.ingredients.data,
        isLoading: false,
      });
    });
  });

  describe("set_ingredients_error", () => {
    it("sets error", () => {
      const error = new Error("Some error");
      const initialState: IngredientsState = {
        data: [],
        isLoading: true,
      };
      const action = ingredients.actions.setError(error);

      expect(
        ingredients.reducer(initialState, action)
      ).toEqual<IngredientsState>({
        error,
        data: [],
        isLoading: false,
      });
    });
  });
});
