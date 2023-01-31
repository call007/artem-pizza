import { Ingredient } from "./types";

const ERROR_MESSAGE = "Something went wrong";

const response = (response: Response) => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText || ERROR_MESSAGE);
};

export const getPizzaIngredients = (): Promise<Ingredient[]> =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/ingredients`
  ).then(response);

export const addNewIngredient = (formData: FormData) =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/ingredients`,
    {
      method: "POST",
      body: formData,
    }
  ).then(response);

export const removeIngredient = (ingredientId: string) =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/ingredients/${ingredientId}`,
    {
      method: "DELETE",
    }
  ).then(response);

export const updateIngredient = (ingredientId: string, formData: FormData) =>
  fetch(
    `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}/ingredients/${ingredientId}`,
    {
      method: "PUT",
      body: formData,
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
