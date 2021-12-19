import {
  setUserIsAuthorizedAction,
  setUserIsCheckoutSuccessAction,
} from "./actions";
import { userReducer, UserState } from "./reducer";

describe("pizzaReducer", () => {
  describe("set_isAuthorized", () => {
    it("sets isAuthorized", () => {
      const initialState: UserState = {};
      const action = setUserIsAuthorizedAction(true);
      expect(userReducer(initialState, action)).toEqual<UserState>({
        isAuthorized: true,
      });
    });
  });

  describe("set_isCheckoutSuccess", () => {
    it("sets isCheckoutSuccess", () => {
      const initialState: UserState = {};
      const action = setUserIsCheckoutSuccessAction(true);
      expect(userReducer(initialState, action)).toEqual<UserState>({
        isCheckoutSuccess: true,
      });
    });
  });
});
