import { useState } from "react";
import { removeIngredient } from "../../../api";
import { useIngredientsContext } from "../../../context/IngredientsContext";
import { Ingredient } from "../../../types";

interface Props {
  ingredient: Ingredient;
  setIsEditing: (isEditing: boolean) => void;
}

export function Summary({ ingredient, setIsEditing }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { fetchIngredients } = useIngredientsContext();

  const onRemoveIngredient = (ingredientId: string) => {
    const isConfirmedToDelete = window.confirm(
      "Вы уверены, что хотите удалить ингредиент?"
    );

    if (isConfirmedToDelete) {
      setIsLoading(true);

      removeIngredient(ingredientId)
        .then(() => {
          alert("Ингредиент был успешно удалён");

          fetchIngredients().catch((error) => {
            setIsLoading(false);
            alert(error);
          });
        })
        .catch((error) => {
          setIsLoading(false);
          alert(error);
        });
    }
  };

  return (
    <>
      {Object.entries(ingredient).map(([key, value]) => (
        <dl key={key}>
          <dt style={{ display: "inline" }}>{key}:</dt>
          <dd style={{ display: "inline" }}>{value}</dd>
        </dl>
      ))}
      <div>
        <img
          src={`${process.env.REACT_APP_API_URL}/${ingredient.thumbnail}`}
          alt=""
        />
        <img
          src={`${process.env.REACT_APP_API_URL}/${ingredient.image}`}
          alt=""
        />
      </div>
      <button type="button" onClick={() => onRemoveIngredient(ingredient.id)}>
        <span style={{ color: "red" }}>
          {isLoading ? "Загрузка..." : "Удалить"}
        </span>
      </button>
      &nbsp;
      <button type="button" onClick={() => setIsEditing(true)}>
        Редактировать
      </button>
    </>
  );
}
