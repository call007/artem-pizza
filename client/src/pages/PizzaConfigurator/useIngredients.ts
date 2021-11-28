import { useEffect, useState } from "react";
import { getPizzaIngredients } from "../../api";
import { useIngredientsContext } from "../../context/IngredientsContext";

export function useIngredients() {
  const { ingredients, setIngredients, getIngredientsByCategory } =
    useIngredientsContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getPizzaIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [setIngredients]);

  const size = getIngredientsByCategory("size");
  const dough = getIngredientsByCategory("dough");
  const sauces = getIngredientsByCategory("sauces");
  const cheese = getIngredientsByCategory("cheese");
  const meat = getIngredientsByCategory("meat");
  const vegetables = getIngredientsByCategory("vegetables");

  return {
    isLoading,
    error,
    ingredients,
    size,
    dough,
    sauces,
    cheese,
    meat,
    vegetables,
  };
}
