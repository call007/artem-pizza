import { mockState } from "../../mocks/mockStore";
import { getIsAuthorized, getIsCheckoutSuccess } from "./selectors";

describe("getIsAuthorized", () => {
  it("returns the user property 'isAuthorized' from the state", () => {
    expect(getIsAuthorized(mockState)).toEqual(false);
  });
});

describe("getIsCheckoutSuccess", () => {
  it("returns the user property 'isCheckoutSuccess' from the state", () => {
    expect(getIsCheckoutSuccess(mockState)).toEqual(true);
  });
});
