import { createAction } from "@reduxjs/toolkit";
import { IngredientsState } from "./reducer";

export const setIngredientsDataAction =
  createAction<IngredientsState["data"]>("set_ingredients");

export const setIngredientsErrorAction =
  createAction<IngredientsState["error"]>("set_ingredients_error");
