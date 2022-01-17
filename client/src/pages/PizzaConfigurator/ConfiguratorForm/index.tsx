import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { calculatePrice } from "../../../calculatePrice";
import { PATH } from "../../../consts";
import { useMediaPhone } from "../../../hooks";
import {
  getError,
  getIngredients,
  getIngredientsByCategory,
  getIsLoading,
} from "../../../state/ingredients/selectors";
import { fetchIngredients } from "../../../state/ingredients/thunk";
import { getPizza } from "../../../state/order/selectors";
import { orderSlice } from "../../../state/order/slice";
import { AppDispatch } from "../../../store";
import { Category, Pizza } from "../../../types";
import { Typography } from "../../../ui-kit";
import { FieldsetCheckboxGroup } from "../FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "../FieldsetRadioGroup";
import * as Styled from "./styles";

export function ConfiguratorForm() {
  const isPhone = useMediaPhone();

  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const ingredients = useSelector(getIngredients);
  const pizza = useSelector(getPizza);

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauces = useSelector(getIngredientsByCategory(Category.Sauces));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  const { register, control } = useForm<Pizza>({
    defaultValues: {
      size: pizza.size,
      dough: pizza.dough,
      sauces: pizza.sauces,
      cheese: pizza.cheese,
      vegetables: pizza.vegetables,
      meat: pizza.meat,
    },
  });

  const formValues = useWatch({
    control,
  }) as Pizza;

  useEffect(() => {
    dispatch(orderSlice.actions.setPizza(formValues));
    dispatch(
      orderSlice.actions.setPrice(calculatePrice(formValues, ingredients))
    );
  }, [formValues, dispatch, ingredients]);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSubmit: React.ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    history.push(PATH.Checkout);
  };

  if (isLoading) {
    return <Styled.Container>Загрузка...</Styled.Container>;
  }

  if (error) {
    return <Styled.Container>{error.message}</Styled.Container>;
  }

  return (
    <Styled.Container>
      {!isPhone && (
        <Typography size="xxl" weight="bold" component="h1">
          Собери свою пиццу
        </Typography>
      )}

      <form onSubmit={handleSubmit} id="configurator-form">
        <Styled.Box>
          <FieldsetRadioGroup
            title="Размер"
            dataIngredients={size}
            isVisiblePrice={false}
            register={register}
          />
        </Styled.Box>

        <Styled.Box>
          <FieldsetRadioGroup
            title="Тесто"
            dataIngredients={dough}
            isVisiblePrice={false}
            register={register}
          />
        </Styled.Box>

        <Styled.Box>
          <FieldsetRadioGroup
            title="Выберите соус"
            dataIngredients={sauces}
            isVisiblePrice={false}
            register={register}
          />
        </Styled.Box>

        <Styled.Box>
          <FieldsetCheckboxGroup
            title="Добавьте сыр"
            dataIngredients={cheese}
            register={register}
          />
        </Styled.Box>

        <Styled.Box>
          <FieldsetCheckboxGroup
            title="Добавьте овощи"
            dataIngredients={vegetables}
            register={register}
          />
        </Styled.Box>

        <Styled.Box>
          <FieldsetCheckboxGroup
            title="Добавьте мясо"
            dataIngredients={meat}
            register={register}
          />
        </Styled.Box>
      </form>
    </Styled.Container>
  );
}
