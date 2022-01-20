import { FieldValues, UseFormRegister } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
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
  isLoading?: boolean;
}

export function FieldsetRadioGroup({
  isVisiblePrice = true,
  title,
  dataIngredients,
  register,
  isLoading,
}: Props) {
  return (
    <Fieldset legend={title} isLoading={isLoading}>
      <HorizontalScroller>
        {isLoading ? (
          <Skeleton className="skeleton" wrapper={Styled.SkeletonWrapper} />
        ) : (
          <Styled.Container>
            {dataIngredients?.map((ingredient) => (
              <Radiobox
                key={ingredient.id}
                value={ingredient.slug}
                label={ingredient.name}
                price={isVisiblePrice ? ingredient.price : undefined}
                id={`${ingredient.slug}-${ingredient.category}`}
                {...register(ingredient.category)}
              />
            ))}
          </Styled.Container>
        )}
      </HorizontalScroller>
    </Fieldset>
  );
}
