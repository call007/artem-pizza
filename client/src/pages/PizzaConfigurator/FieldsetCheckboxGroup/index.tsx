import { FieldValues, UseFormRegister } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { Ingredient } from "../../../types";
import { HorizontalScroller } from "../../../ui-kit";
import { Fieldset } from "../Fieldset";
import { Checkbox } from "./Checkbox";
import * as Styled from "./styles";

interface Props {
  title: string;
  register: UseFormRegister<FieldValues>;
  dataIngredients?: Ingredient[];
  isLoading?: boolean;
}

export function FieldsetCheckboxGroup({
  title,
  register,
  dataIngredients,
  isLoading,
}: Props) {
  return (
    <Fieldset legend={title} isLoading={isLoading}>
      <HorizontalScroller>
        <Styled.Container>
          {isLoading ? (
            <Skeleton count={3} inline={true} className="skeleton" />
          ) : (
            dataIngredients?.map((ingredient) => (
              <Checkbox
                key={ingredient.id}
                value={ingredient.slug}
                label={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.thumbnail}
                id={`${ingredient.slug}-${ingredient.category}`}
                category={ingredient.category}
                register={register}
              />
            ))
          )}
        </Styled.Container>
      </HorizontalScroller>
    </Fieldset>
  );
}
