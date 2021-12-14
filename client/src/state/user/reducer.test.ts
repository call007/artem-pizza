import { Action, State, userReducer } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_isAuthorized", () => {
    it("sets isAuthorized", () => {
      const initialState: State = {};
      const action: Action = {
        type: "set_isAuthorized",
        payload: true,
      };
      expect(userReducer(initialState, action)).toEqual<State>({
        isAuthorized: true,
      });
    });
  });

  describe("set_isCheckoutSuccess", () => {
    it("sets isCheckoutSuccess", () => {
      const initialState: State = {};
      const action: Action = {
        type: "set_isCheckoutSuccess",
        payload: true,
      };
      expect(userReducer(initialState, action)).toEqual<State>({
        isCheckoutSuccess: true,
      });
    });
  });
});
