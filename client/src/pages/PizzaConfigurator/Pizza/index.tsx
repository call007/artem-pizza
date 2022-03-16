import { useSelector } from "react-redux";
import { getIngredientsByCategory } from "../../../state/ingredients/selectors";
import { getPizza } from "../../../state/order/selectors";
import { Category } from "../../../types";
import { LazyImage } from "../../../ui-kit";
import * as Styled from "./styles";
import { UnmountTransition } from "./UnmountTransition";

export function Pizza() {
  const pizza = useSelector(getPizza);

  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  const doughImage = dough.find(
    (ingredient) => ingredient.slug === pizza.dough
  )?.image;

  return (
    <Styled.Container>
      <Styled.Plate>
        <Styled.PlateSize size={pizza.size}>
          {doughImage && (
            <LazyImage src={`${process.env.REACT_APP_API_URL}/${doughImage}`} />
          )}

          <Styled.Cheese>
            {cheese.map((ingredient) => (
              <UnmountTransition
                in={pizza.cheese.includes(ingredient.slug)}
                key={ingredient.id}
              >
                <LazyImage
                  src={`${process.env.REACT_APP_API_URL}/${ingredient.image}`}
                />
              </UnmountTransition>
            ))}
          </Styled.Cheese>

          <Styled.Ingredients>
            {meat.map((ingredient) => (
              <UnmountTransition
                in={pizza.meat.includes(ingredient.slug)}
                key={ingredient.id}
              >
                <LazyImage
                  src={`${process.env.REACT_APP_API_URL}/${ingredient.image}`}
                />
              </UnmountTransition>
            ))}

            {vegetables.map((ingredient) => (
              <UnmountTransition
                in={pizza.vegetables.includes(ingredient.slug)}
                key={ingredient.id}
              >
                <LazyImage
                  src={`${process.env.REACT_APP_API_URL}/${ingredient.image}`}
                />
              </UnmountTransition>
            ))}
          </Styled.Ingredients>
        </Styled.PlateSize>
      </Styled.Plate>
    </Styled.Container>
  );
}
