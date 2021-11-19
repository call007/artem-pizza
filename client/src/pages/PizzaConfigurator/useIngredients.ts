import { useEffect, useState } from "react";
import { getPizzaIngredients } from "../../api";
import { usePizzaContext } from "../../PizzaContext";
import { Ingredient } from "../../types";

export function useIngredients() {
  const { dispatch } = usePizzaContext();
  const [data, setData] = useState<Ingredient[]>();

  const getIngredients = (category: string) =>
    data?.filter((ingredient) => ingredient.category === category);

  useEffect(() => {
    getPizzaIngredients().then((data) => {
      setData(data);
      dispatch({ type: "update-ingredients", payload: data });
    });
  }, []);

  const size = getIngredients("size");
  const dough = getIngredients("dough");
  const sauces = getIngredients("sauces");
  const cheese = getIngredients("cheese");
  const meat = getIngredients("meat");
  const vegetables = getIngredients("vegetables");

  return { size, dough, sauces, cheese, meat, vegetables, dispatch };
}
