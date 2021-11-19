import { Ingredient } from "./types";

export const getPizzaIngredients = (): Promise<Ingredient[]> =>
  fetch(`${process.env.REACT_APP_API_URL}ingredients`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || "Something went wrong");
    }
  });
