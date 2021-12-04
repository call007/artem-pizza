import { Ingredient } from "../../../types";
import { Item } from "../Item/Item";

interface Props {
  ingredients: Ingredient[];
}

export function List({ ingredients }: Props) {
  if (ingredients.length === 0) {
    return null;
  }

  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </ul>
  );
}
