import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { FieldsName, State } from "./types";
import { reducer } from "./reducer";
import { data } from "./data";
import { FieldsetCheckboxGroup } from "./FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "./FieldsetRadioGroup";
import { PizzaResult } from "./PizzaResult";

const initialState: State = {
  pizza: {
    size: data.size.filter((item) => item.id === 0),
    dough: data.dough.filter((item) => item.id === 0),
    sauce: data.sauce.filter((item) => item.id === 0),
    cheese: [],
    vegetables: [],
    meat: [],
  },
  totalPrice: 200,
};

export function PizzaConfigurator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLFormElement & HTMLInputElement>) => {
    const inputElement = e.target;
    const name = inputElement.name as FieldsName;

    const option = data[name].find(
      (item) => item.id === Number(inputElement.dataset.id)
    );

    if (option) {
      dispatch({
        type: inputElement.checked ? "add-option" : "remove-option",
        payload: {
          ...option,
          name,
        },
      });
    }
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  if (isFormSubmitted) {
    return <PizzaResult fields={state.pizza} totalPrice={state.totalPrice} />;
  }

  return (
    <form onChange={handleChange} onSubmit={handleSumbit}>
      <h1>Собери свою пиццу</h1>

      <FieldsetRadioGroup
        title="Размер"
        name={FieldsName.Size}
        dataOptions={data.size}
        checkedOptions={state.pizza.size}
      />

      <FieldsetRadioGroup
        title="Тесто"
        name={FieldsName.Dough}
        dataOptions={data.dough}
        checkedOptions={state.pizza.dough}
      />

      <FieldsetRadioGroup
        title="Выберите соус"
        name={FieldsName.Sauce}
        dataOptions={data.sauce}
        checkedOptions={state.pizza.sauce}
      />

      <FieldsetCheckboxGroup
        title="Добавьте сыр"
        name={FieldsName.Cheese}
        dataOptions={data.cheese}
        checkedOptions={state.pizza.cheese}
      />

      <FieldsetCheckboxGroup
        title="Добавьте овощи"
        name={FieldsName.Vegetables}
        dataOptions={data.vegetables}
        checkedOptions={state.pizza.vegetables}
      />

      <FieldsetCheckboxGroup
        title="Добавьте овощи"
        name={FieldsName.Meat}
        dataOptions={data.meat}
        checkedOptions={state.pizza.meat}
      />

      <div>
        <button type="submit">Заказать за {state.totalPrice} руб</button>
      </div>
    </form>
  );
}
