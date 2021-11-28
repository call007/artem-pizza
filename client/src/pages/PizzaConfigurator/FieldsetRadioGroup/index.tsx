import { FieldValues, UseFormRegister } from "react-hook-form";
import { Fieldset, Radiobox } from "../../../components";
import { Ingredient } from "../../../types";

interface Props {
  title: string;
  dataIngredients?: Ingredient[];
  register: UseFormRegister<FieldValues>;
  isVisiblePrice?: boolean;
}

export function FieldsetRadioGroup({ isVisiblePrice = true, ...props }: Props) {
  return (
    <Fieldset legend={props.title}>
      {props.dataIngredients?.map((ingredient) => (
        <Radiobox
          key={ingredient.id}
          value={ingredient.slug}
          label={ingredient.name}
          price={isVisiblePrice ? ingredient.price : undefined}
          id={`${ingredient.slug}-${ingredient.category}`}
          {...props.register(ingredient.category)}
        />
      ))}
    </Fieldset>
  );
}
