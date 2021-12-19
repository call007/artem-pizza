import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ingredientsReducer } from "./state/ingredients/reducer";
import { orderReducer } from "./state/pizza/reducer";
import { userReducer } from "./state/user/reducer";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    ingredients: ingredientsReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const useThunkDispatch = () => useDispatch();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
