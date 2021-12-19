import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ingredients } from "./state/ingredients/reducer";
import { order } from "./state/pizza/reducer";
import { user } from "./state/user/reducer";

export const store = configureStore({
  reducer: {
    order: order.reducer,
    ingredients: ingredients.reducer,
    user: user.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const useThunkDispatch = () => useDispatch();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
