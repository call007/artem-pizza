import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzaIngredients } from "../../api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const ingredients = await getPizzaIngredients();
    return ingredients;
  }
);
