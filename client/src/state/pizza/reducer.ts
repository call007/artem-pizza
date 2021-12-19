import { createReducer } from "@reduxjs/toolkit";
import { Pizza } from "../../types";
import { setOrderPizzaAction, setOrderPriceAction } from "./actions";

export type OrderState = {
  pizza?: Pizza;
  price?: number;
};

const initialState: OrderState = {};

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOrderPizzaAction, (state, action) => {
      state.pizza = action.payload;
    })
    .addCase(setOrderPriceAction, (state, action) => {
      state.price = action.payload;
    });
});
