import { user, UserState } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_isAuthorized", () => {
    it("sets isAuthorized", () => {
      const initialState: UserState = {};
      const action = user.actions.setIsAuthorized(true);
      expect(user.reducer(initialState, action)).toEqual<UserState>({
        isAuthorized: true,
      });
    });
  });

  describe("set_isCheckoutSuccess", () => {
    it("sets isCheckoutSuccess", () => {
      const initialState: UserState = {};
      const action = user.actions.setIsCheckoutSuccess(true);
      expect(user.reducer(initialState, action)).toEqual<UserState>({
        isCheckoutSuccess: true,
      });
    });
  });
});
