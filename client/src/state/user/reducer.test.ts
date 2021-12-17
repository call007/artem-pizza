import { UserAction, userReducer, UserState } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_isAuthorized", () => {
    it("sets isAuthorized", () => {
      const initialState: UserState = {};
      const action: UserAction = {
        type: "set_isAuthorized",
        payload: true,
      };
      expect(userReducer(initialState, action)).toEqual<UserState>({
        isAuthorized: true,
      });
    });
  });

  describe("set_isCheckoutSuccess", () => {
    it("sets isCheckoutSuccess", () => {
      const initialState: UserState = {};
      const action: UserAction = {
        type: "set_isCheckoutSuccess",
        payload: true,
      };
      expect(userReducer(initialState, action)).toEqual<UserState>({
        isCheckoutSuccess: true,
      });
    });
  });
});
