import { Ingredient, Order } from "./types";

export const getPizzaIngredients = (): Promise<Ingredient[]> =>
  fetch(`${process.env.REACT_APP_API_URL}ingredients`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || "Something went wrong");
    }
  });

export const getOrders = (): Promise<Order[]> =>
  fetch(`${process.env.REACT_APP_API_URL}orders`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || "Something went wrong");
    }
  });

export const postOrder = (order: Order): Promise<Order[]> =>
  fetch(`${process.env.REACT_APP_API_URL}orders`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: { "Content-type": "application/json" },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || "Something went wrong");
    }
  });
