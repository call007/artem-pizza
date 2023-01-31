import { Ingredient, Order } from "./types";

const response = (response: Response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText || "Something went wrong");
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

export const serverLogin = (
  email: string,
  password: string
): Promise<{ token: string }> =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/admin-auth/login`,
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(response);
