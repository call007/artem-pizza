import { createSlice } from "@reduxjs/toolkit";
import { Ingredient } from "../../types";

export type IngredientsState = {
  data: Ingredient[];
  isLoading: boolean;
  error?: Error;
};

const initialState: IngredientsState = {
  data: [],
  isLoading: true,
};

export const ingredients = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
