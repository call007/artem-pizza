import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Ingredient } from "../types";

export const IngredientsContext = createContext(
  {} as {
    ingredients: Ingredient[];
    setIngredients: (ingredients: Ingredient[]) => void;
    getIngredientsByCategory: (category: string) => Ingredient[];
  }
);

export const IngredientsProvider = (props: PropsWithChildren<{}>) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const getIngredientsByCategory = (category: string) =>
    ingredients?.filter((ingredient) => ingredient.category === category);

  return (
    <IngredientsContext.Provider
      value={{ ingredients, setIngredients, getIngredientsByCategory }}
    >
      {props.children}
    </IngredientsContext.Provider>
  );
};

export const useIngredientsContext = () => useContext(IngredientsContext);
