import { FieldValues, UseFormRegister } from "react-hook-form";
import { Checkbox, Fieldset } from "../../../components";
import { Ingredient } from "../../../types";

interface Props {
  title: string;
  register: UseFormRegister<FieldValues>;
  dataOptions?: Ingredient[];
}

export function FieldsetCheckboxGroup(props: Props) {
  if (!props.dataOptions) {
    return <span>Загрузка...</span>;
  }

  return (
    <Fieldset legend={props.title}>
      {props.dataOptions.map((ingredient) => (
        <Checkbox
          key={ingredient.id}
          value={ingredient.slug}
          label={ingredient.name}
          price={ingredient.price}
          id={`${ingredient.slug}-${ingredient.category}`}
          {...props.register(ingredient.category)}
        />
      ))}
    </Fieldset>
  );
}
