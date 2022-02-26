import { Ingredient, Order } from "./types";

const response = (response: Response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText || "Something went wrong");
  }
};

export const getPizzaIngredients = (): Promise<Ingredient[]> =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/ingredients`
  ).then(response);

export const getOrders = (): Promise<Order[]> =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/orders`
  ).then(response);

export const postOrder = (order: Order): Promise<Order[]> =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/orders`,
    {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-type": "application/json" },
    }
  ).then(response);
