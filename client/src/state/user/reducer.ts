import { createSlice } from "@reduxjs/toolkit";

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
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
    setIsCheckoutSuccess: (state, action) => {
      state.isCheckoutSuccess = action.payload;
    },
  },
});
