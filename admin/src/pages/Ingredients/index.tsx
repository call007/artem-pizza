import { useIngredientsContext } from "../../context/IngredientsContext";
import { List } from "./List";

export function Ingredients() {
  const { isLoading, error, getIngredientsByCategory } =
    useIngredientsContext();

  if (error) {
    return <>{error.message}</>;
  }

  if (isLoading) {
    return <>Загрузка...</>;
  }

  const size = getIngredientsByCategory("size");
  const dough = getIngredientsByCategory("dough");
  const sauces = getIngredientsByCategory("sauces");
  const cheese = getIngredientsByCategory("cheese");
  const meat = getIngredientsByCategory("meat");
  const vegetables = getIngredientsByCategory("vegetables");

  return (
    <>
      <h1>Ингредиенты</h1>

      <h2>Размер</h2>
      <List ingredients={size} />

      <h2>Тесто</h2>
      <List ingredients={dough} />

      <h2>Соус</h2>
      <List ingredients={sauces} />

      <h2>Сыр</h2>
      <List ingredients={cheese} />

      <h2>Сыр</h2>
      <List ingredients={cheese} />

      <h2>Мясо</h2>
      <List ingredients={meat} />

      <h2>Овощи</h2>
      <List ingredients={vegetables} />
    </>
  );
}
