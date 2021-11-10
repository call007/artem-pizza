import React from "react";
import { useHistory } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import { data } from "../../data";
import { Path } from "../../consts";
import { FieldsName, StatePizza } from "../../types";
import { calculatePrice } from "../../calculatePrice";
import { initialState, usePizzaContext } from "../../PizzaContext";
import { FieldsetCheckboxGroup } from "./FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "./FieldsetRadioGroup";

export function PizzaConfigurator() {
  const history = useHistory();
  const { dispatch, setIsPizzaBuilded } = usePizzaContext();

  const { register, control } = useForm<StatePizza>({
    defaultValues: initialState.pizza,
  });

  const formValues = useWatch({
    control: control,
  }) as StatePizza;

  const handleSubmit: React.ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsPizzaBuilded(true);
    dispatch({ type: "update-pizza", payload: formValues });
    history.push(Path.PizzaPreview);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Собери свою пиццу</h1>

      <FieldsetRadioGroup
        title="Размер"
        name={FieldsName.Size}
        dataOptions={data.size}
        isVisiblePrice={false}
        register={register}
      />

      <FieldsetRadioGroup
        title="Тесто"
        name={FieldsName.Dough}
        dataOptions={data.dough}
        register={register}
      />

      <FieldsetRadioGroup
        title="Выберите соус"
        name={FieldsName.Sauce}
        dataOptions={data.sauce}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте сыр"
        name={FieldsName.Cheese}
        dataOptions={data.cheese}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте овощи"
        name={FieldsName.Vegetables}
        dataOptions={data.vegetables}
        register={register}
      />

      <FieldsetCheckboxGroup
        title="Добавьте мясо"
        name={FieldsName.Meat}
        dataOptions={data.meat}
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
