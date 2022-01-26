import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isAuthorized?: boolean;
};

const initialState: UserState = {
  isAuthorized: false,
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
  },
});
