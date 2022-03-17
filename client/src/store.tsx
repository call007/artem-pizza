import { configureStore } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./state/ingredients/slice";
import { orderSlice } from "./state/order/slice";

export const store = configureStore({
  reducer: {
    order: orderSlice.reducer,
    ingredients: ingredientsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
