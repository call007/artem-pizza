import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { PATH } from "../../consts";
import { StatePizza } from "../../types";
import { calculatePrice } from "../../calculatePrice";
import { FieldsetCheckboxGroup } from "./FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "./FieldsetRadioGroup";
import { useIngredients } from "./useIngredients";

export function PizzaConfigurator() {
  const history = useHistory();
  const { size, dough, sauces, cheese, meat, vegetables, dispatch } =
    useIngredients();

  const { register, watch } = useForm<StatePizza>({
    defaultValues: {
      size: "30cm",
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
    dispatch({ type: "update-price", payload: calculatePrice(formValues) });
    history.push(PATH.PizzaPreview);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Собери свою пиццу</h1>

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
        dataOptions={cheese}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте овощи"
        dataOptions={vegetables}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте мясо"
        dataOptions={meat}
        register={register}
      />

      <div>
        <button type="submit">
          Заказать за {calculatePrice(formValues)} руб
        </button>
      </div>
    </form>
  );
}
