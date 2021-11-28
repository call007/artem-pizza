import { Ingredient } from "./types";

const ERROR_MESSAGE = "Something went wrong";

export const getPizzaIngredients = (): Promise<Ingredient[]> =>
  fetch(`${process.env.REACT_APP_API_URL}ingredients`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || ERROR_MESSAGE);
    }
  });

export const addNewIngredient = (formData: FormData) =>
  fetch(`${process.env.REACT_APP_API_URL}ingredients`, {
    method: "POST",
    body: formData,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || ERROR_MESSAGE);
    }
  });

export const removeIngredient = (ingredientId: string) =>
  fetch(`${process.env.REACT_APP_API_URL}ingredients/${ingredientId}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || ERROR_MESSAGE);
    }
  });

export const updateIngredient = (ingredientId: string, formData: FormData) =>
  fetch(`${process.env.REACT_APP_API_URL}ingredients/${ingredientId}`, {
    method: "PUT",
    body: formData,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || ERROR_MESSAGE);
    }
  });
