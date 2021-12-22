import { createSlice } from "@reduxjs/toolkit";
import { Pizza } from "../../types";

export type OrderState = {
  pizza?: Pizza;
  price?: number;
};

const initialState: OrderState = {};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPizza: (state, action) => {
      state.pizza = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});
