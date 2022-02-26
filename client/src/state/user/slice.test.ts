import { userSlice, UserState } from "./slice";

describe("pizzaReducer", () => {
  describe("set_isAuthorized", () => {
    it("sets isAuthorized", () => {
      const initialState: UserState = {};
      const action = userSlice.actions.setIsAuthorized(true);
      expect(userSlice.reducer(initialState, action)).toEqual<UserState>({
        isAuthorized: true,
      });
    });
  });
});
