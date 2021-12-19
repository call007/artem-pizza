import { createAction } from "@reduxjs/toolkit";
import { OrderState } from "./reducer";

export const setOrderPizzaAction =
  createAction<OrderState["pizza"]>("set_pizza");

export const setOrderPriceAction =
  createAction<OrderState["price"]>("set_price");
