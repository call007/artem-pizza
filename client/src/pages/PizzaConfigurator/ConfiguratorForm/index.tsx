import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { calculatePrice } from "../../../calculatePrice";
import { PATH } from "../../../consts";
import { usePizzaContext } from "../../../context/PizzaContext";
import { StatePizza } from "../../../types";
import { FieldsetCheckboxGroup } from "../FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "../FieldsetRadioGroup";
import { useIngredients } from "../useIngredients";

export function ConfiguratorForm() {
  const history = useHistory();
  const { dispatch } = usePizzaContext();
  const {
    isLoading,
    error,
    ingredients,
    size,
    dough,
    sauces,
    cheese,
    meat,
    vegetables,
  } = useIngredients();

  const { register, watch } = useForm<StatePizza>({
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

  const handleSubmit: React.ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({ type: "update-pizza", payload: formValues });
    dispatch({
      type: "update-price",
      payload: calculatePrice(formValues, ingredients),
    });
    history.push(PATH.PizzaPreview);
  };

  if (error) {
    return <>{error.message}</>;
  }

  if (isLoading) {
    return <>Загрузка...</>;
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
