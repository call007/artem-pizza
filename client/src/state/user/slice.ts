import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isAuthorized?: boolean;
  isCheckoutSuccess?: boolean;
};

const initialState: UserState = {
  isAuthorized: false,
  isCheckoutSuccess: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthorized: (
      state,
      action: PayloadAction<UserState["isAuthorized"]>
    ) => {
      state.isAuthorized = action.payload;
    },
    setIsCheckoutSuccess: (
      state,
      action: PayloadAction<UserState["isCheckoutSuccess"]>
    ) => {
      state.isCheckoutSuccess = action.payload;
    },
  },
});
