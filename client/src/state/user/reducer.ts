import { createReducer } from "@reduxjs/toolkit";
import {
  setUserIsAuthorizedAction,
  setUserIsCheckoutSuccessAction,
} from "./actions";

export type UserState = {
  isAuthorized?: boolean;
  isCheckoutSuccess?: boolean;
};

const initialState: UserState = {
  isAuthorized: false,
  isCheckoutSuccess: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserIsAuthorizedAction, (state, action) => {
      state.isAuthorized = action.payload;
    })
    .addCase(setUserIsCheckoutSuccessAction, (state, action) => {
      state.isCheckoutSuccess = action.payload;
    });
});
