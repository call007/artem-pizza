import { mockState } from "../../mocks/mockStore";
import { setIngredientsDataAction, setIngredientsErrorAction } from "./actions";
import { ingredientsReducer, IngredientsState } from "./reducer";

describe("ingredientsReducer", () => {
  describe("set_ingredients", () => {
    it("sets ingredients", () => {
      const initialState: IngredientsState = {
        data: [],
        isLoading: true,
      };
      const action = setIngredientsDataAction(mockState.ingredients.data);

      expect(
        ingredientsReducer(initialState, action)
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
      const action = setIngredientsErrorAction(error);

      expect(
        ingredientsReducer(initialState, action)
      ).toEqual<IngredientsState>({
        error,
        data: [],
        isLoading: false,
      });
    });
  });
});
