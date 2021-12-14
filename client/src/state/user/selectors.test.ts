import { RootState } from "../../store";
import { getIsAuthorized, getIsCheckoutSuccess } from "./selectors";

describe("getIsAuthorized", () => {
  it("returns the user property 'isAuthorized' from the state", () => {
    const state: Partial<RootState> = {
      user: {
        isAuthorized: true,
      },
    };
    expect(getIsAuthorized(state as any)).toEqual(true);
  });
});

describe("getIsCheckoutSuccess", () => {
  it("returns the user property 'isCheckoutSuccess' from the state", () => {
    const state: Partial<RootState> = {
      user: {
        isCheckoutSuccess: true,
      },
    };
    expect(getIsCheckoutSuccess(state as any)).toEqual(true);
  });
});
