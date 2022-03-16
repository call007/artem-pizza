import { useState } from "react";
import { Ingredient } from "../../../types";
import { EditForm } from "./EditForm";
import { Summary } from "./Sumary";

interface Props {
  ingredient: Ingredient;
}

export function Item({ ingredient }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li style={{ marginBottom: 20 }}>
      {isEditing ? (
        <EditForm ingredient={ingredient} setIsEditing={setIsEditing} />
      ) : (
        <Summary ingredient={ingredient} setIsEditing={setIsEditing} />
      )}
    </li>
  );
}
