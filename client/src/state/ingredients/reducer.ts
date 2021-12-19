import { createReducer } from "@reduxjs/toolkit";
import { Ingredient } from "../../types";
import { setIngredientsDataAction, setIngredientsErrorAction } from "./actions";

export type IngredientsState = {
  data: Ingredient[];
  isLoading: boolean;
  error?: Error;
};

const initialState: IngredientsState = {
  data: [],
  isLoading: true,
};

export const ingredientsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIngredientsDataAction, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(setIngredientsErrorAction, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
});
