import { FieldValues, UseFormRegister } from "react-hook-form";
import { Ingredient } from "../../../types";
import { HorizontalScroller } from "../../../ui-kit";
import { Fieldset } from "../Fieldset";
import { Checkbox } from "./Checkbox";
import * as Styled from "./styles";

interface Props {
  title: string;
  register: UseFormRegister<FieldValues>;
  dataIngredients?: Ingredient[];
}

export function FieldsetCheckboxGroup(props: Props) {
  return (
    <Fieldset legend={props.title}>
      <HorizontalScroller>
        <Styled.Container>
          {props.dataIngredients?.map((ingredient) => (
            <Checkbox
              key={ingredient.id}
              value={ingredient.slug}
              label={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.thumbnail}
              id={`${ingredient.slug}-${ingredient.category}`}
              category={ingredient.category}
              register={props.register}
            />
          ))}
        </Styled.Container>
      </HorizontalScroller>
    </Fieldset>
  );
}
