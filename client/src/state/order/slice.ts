import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../../types";

export type OrderState = {
  pizza: Pizza;
  price?: number;
};

const initialState: OrderState = {
  pizza: {
    size: "30",
    dough: "thin",
    sauces: "tomato",
    cheese: ["cheddar"],
    vegetables: [],
    meat: [],
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPizza: (state, action: PayloadAction<OrderState["pizza"]>) => {
      state.pizza = action.payload;
    },
    setPrice: (state, action: PayloadAction<OrderState["price"]>) => {
      state.price = action.payload;
    },
  },
});
