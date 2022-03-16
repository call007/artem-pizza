import { mockState } from "../../mocks/mockStore";
import { getIsAuthorized } from "./selectors";

describe("getIsAuthorized", () => {
  it("returns the user property 'isAuthorized' from the state", () => {
    expect(getIsAuthorized(mockState)).toEqual(false);
  });
});
