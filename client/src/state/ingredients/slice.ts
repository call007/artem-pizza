import { createSlice } from "@reduxjs/toolkit";
import { Ingredient } from "../../types";
import { fetchIngredients } from "./thunk";

export type IngredientsState = {
  data: Ingredient[];
  isLoading?: boolean;
  errorMessage?: string;
};

const initialState: IngredientsState = {
  data: [],
  isLoading: true,
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.errorMessage = action.error.message;
        state.isLoading = false;
      });
  },
});
