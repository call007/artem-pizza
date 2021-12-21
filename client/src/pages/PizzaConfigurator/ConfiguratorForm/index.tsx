import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { calculatePrice } from "../../../calculatePrice";
import { PATH } from "../../../consts";
import {
  getError,
  getIngredients,
  getIngredientsByCategory,
  getIsLoading,
} from "../../../state/ingredients/selectors";
import { fetchIngredients } from "../../../state/ingredients/thunk";
import { order } from "../../../state/pizza/reducer";
import { AppDispatch } from "../../../store";
import { Category, Pizza } from "../../../types";
import { FieldsetCheckboxGroup } from "../FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "../FieldsetRadioGroup";

export function ConfiguratorForm() {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const ingredients = useSelector(getIngredients);

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauces = useSelector(getIngredientsByCategory(Category.Sauces));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  const { register, watch } = useForm<Pizza>({
    defaultValues: {
      size: "30",
      dough: "thin",
      sauces: "tomato",
      cheese: [],
      vegetables: [],
      meat: [],
    },
  });

  const formValues = watch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  if (isLoading) {
    return <>Загрузка...</>;
  }

  const handleSubmit: React.ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(order.actions.setPizza(formValues));
    dispatch(order.actions.setPrice(calculatePrice(formValues, ingredients)));
    history.push(PATH.PizzaPreview);
  };

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldsetRadioGroup
        title="Размер"
        dataIngredients={size}
        isVisiblePrice={false}
        register={register}
      />

      <FieldsetRadioGroup
        title="Тесто"
        dataIngredients={dough}
        isVisiblePrice={false}
        register={register}
      />

      <FieldsetRadioGroup
        title="Выберите соус"
        dataIngredients={sauces}
        isVisiblePrice={false}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте сыр"
        dataIngredients={cheese}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте овощи"
        dataIngredients={vegetables}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте мясо"
        dataIngredients={meat}
        register={register}
      />

      <div>
        <button type="submit">
          Заказать за {calculatePrice(formValues, ingredients)} руб
        </button>
      </div>
    </form>
  );
}
