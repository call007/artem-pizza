import { RootState } from "../../store";

export const getPizza = (state: RootState) => state.order.pizza;

export const getPizzaPrice = (state: RootState) => state.order.price;
