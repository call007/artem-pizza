import {
  useEffect,
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";
import { getPizzaIngredients } from "../api";
import { Ingredient } from "../types";

export const IngredientsContext = createContext(
  {} as {
    ingredients: Ingredient[];
    isLoading: boolean;
    error: Error | null;
    fetchIngredients: () => Promise<void>;
    getIngredientsByCategory: (category: string) => Ingredient[];
  }
);

export function IngredientsProvider({ children }: PropsWithChildren<{}>) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchIngredients = async () =>
    await getPizzaIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));

  useEffect(() => {
    fetchIngredients();
  }, []);

  const getIngredientsByCategory = (category: string) =>
    ingredients?.filter((ingredient) => ingredient.category === category);

  return (
    <IngredientsContext.Provider
      value={{
        ingredients,
        isLoading,
        error,
        fetchIngredients,
        getIngredientsByCategory,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
}

export const useIngredientsContext = () => useContext(IngredientsContext);
