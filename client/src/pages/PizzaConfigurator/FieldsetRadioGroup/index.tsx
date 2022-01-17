import { FieldValues, UseFormRegister } from "react-hook-form";
import { Ingredient } from "../../../types";
import { HorizontalScroller } from "../../../ui-kit";
import { Fieldset } from "../Fieldset";
import { Radiobox } from "./Radiobox";
import * as Styled from "./styles";

interface Props {
  title: string;
  dataIngredients?: Ingredient[];
  register: UseFormRegister<FieldValues>;
  isVisiblePrice?: boolean;
}

export function FieldsetRadioGroup({
  isVisiblePrice = true,
  ...restPprops
}: Props) {
  return (
    <Fieldset legend={restPprops.title}>
      <HorizontalScroller>
        <Styled.Container>
          {restPprops.dataIngredients?.map((ingredient) => (
            <Radiobox
              key={ingredient.id}
              value={ingredient.slug}
              label={ingredient.name}
              price={isVisiblePrice ? ingredient.price : undefined}
              id={`${ingredient.slug}-${ingredient.category}`}
              {...restPprops.register(ingredient.category)}
            />
          ))}
        </Styled.Container>
      </HorizontalScroller>
    </Fieldset>
  );
}
