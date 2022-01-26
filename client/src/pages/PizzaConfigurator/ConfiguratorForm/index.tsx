import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PATH } from "../../../consts";
import {
  getIngredients,
  getIngredientsByCategory,
} from "../../../state/ingredients/selectors";
import { fetchIngredients } from "../../../state/ingredients/thunk";
import { getPizza } from "../../../state/order/selectors";
import { orderSlice } from "../../../state/order/slice";
import { AppDispatch } from "../../../store";
import { Category, Pizza } from "../../../types";
import { Typography } from "../../../ui-kit";
import { calculatePrice } from "../../../utils";
import { FieldsetCheckboxGroup } from "../FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "../FieldsetRadioGroup";
import * as Styled from "./styles";

interface ConfiguratorFormProps {
  isLoading?: boolean;
  errorMessage?: string;
}

export function ConfiguratorForm({
  isLoading,
  errorMessage,
}: ConfiguratorFormProps) {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

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

  if (errorMessage) {
    return (
      <Styled.Box>
        <Typography color={(color) => color.statusError}>
          {errorMessage}
        </Typography>
      </Styled.Box>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="configurator-form">
      <Styled.BaseBox>
        <Styled.Box>
          <FieldsetRadioGroup
            title="Размер"
            dataIngredients={size}
            isVisiblePrice={false}
            register={register}
            isLoading={isLoading}
          />
        </Styled.Box>

        <Styled.Box>
          <FieldsetRadioGroup
            title="Тесто"
            dataIngredients={dough}
            isVisiblePrice={false}
            register={register}
            isLoading={isLoading}
          />
        </Styled.Box>
      </Styled.BaseBox>

      <Styled.Box>
        <FieldsetRadioGroup
          title="Выберите соус"
          dataIngredients={sauces}
          isVisiblePrice={false}
          register={register}
          isLoading={isLoading}
        />
      </Styled.Box>

      <Styled.Box>
        <FieldsetCheckboxGroup
          title="Добавьте сыр"
          dataIngredients={cheese}
          register={register}
          isLoading={isLoading}
        />
      </Styled.Box>

      <Styled.Box>
        <FieldsetCheckboxGroup
          title="Добавьте овощи"
          dataIngredients={vegetables}
          register={register}
          isLoading={isLoading}
        />
      </Styled.Box>

      <Styled.Box>
        <FieldsetCheckboxGroup
          title="Добавьте мясо"
          dataIngredients={meat}
          register={register}
          isLoading={isLoading}
        />
      </Styled.Box>
    </form>
  );
}
