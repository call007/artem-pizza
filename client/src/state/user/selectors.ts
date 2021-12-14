import { RootState } from "../../store";

export const getIsAuthorized = (state: RootState) => state.user.isAuthorized;

export const getIsCheckoutSuccess = (state: RootState) =>
  state.user.isCheckoutSuccess;
