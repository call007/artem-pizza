import { useEffect } from "react";
import { getPizzaIngredients } from "../../api";
import { useIngredientsContext } from "../../context/IngredientsContext";

export function useIngredients() {
  const { setIngredients, getIngredientsByCategory } = useIngredientsContext();

  useEffect(() => {
    getPizzaIngredients().then((data) => {
      setIngredients(data);
    });
  }, [setIngredients]);

  const size = getIngredientsByCategory("size");
  const dough = getIngredientsByCategory("dough");
  const sauces = getIngredientsByCategory("sauces");
  const cheese = getIngredientsByCategory("cheese");
  const meat = getIngredientsByCategory("meat");
  const vegetables = getIngredientsByCategory("vegetables");

  return { size, dough, sauces, cheese, meat, vegetables };
}
