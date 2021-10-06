import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { FieldsName, InputType, State } from "./types";
import { reducer } from "./reducer";

import { PizzaSize } from "./PizzaSize";
import { PizzaSauce } from "./PizzaSauce";
import { PizzaDough } from "./PizzaDough";
import { PizzaCheese } from "./PizzaCheese";
import { PizzaVegetables } from "./PizzaVegetables";
import { PizzaMeat } from "./PizzaMeat";
import { PizzaResult } from "./PizzaResult";

const initialState: State = {
  fields: {
    size: [{ id: 0, value: "30 см" }],
    dough: [{ id: 0, value: "Тонкое" }],
    sauce: [{ id: 0, value: "Томатный" }],
    cheese: [],
    vegetables: [],
    meat: [],
  },
  totalPrice: 200,
};

export function PizzaConfigurator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isVisibleResult, setIsVisibleResult] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLFormElement & HTMLInputElement>) => {
    const inputElement = e.target;
    const id = Number((inputElement.id.match(/\d+$/) || [])[0]);
    const price = Number(inputElement.dataset.price) || undefined;
    const name = inputElement.name as FieldsName;
    const type = inputElement.type as InputType;
    const value = inputElement.value;

    dispatch({
      type: inputElement.checked ? "add-option" : "remove-option",
      payload: {
        id,
        name,
        price,
        value,
        type,
      },
    });
  };

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsVisibleResult(true);
  };

  return isVisibleResult ? (
    <PizzaResult fields={state.fields} totalPrice={state.totalPrice} />
  ) : (
    <form onChange={handleChange} onSubmit={handleSumbit}>
      <h1>Собери свою пиццу</h1>

      <PizzaSize checkedOptions={state.fields.size} />
      <PizzaDough checkedOptions={state.fields.dough} />
      <PizzaSauce checkedOptions={state.fields.sauce} />
      <PizzaCheese checkedOptions={state.fields.cheese} />
      <PizzaVegetables checkedOptions={state.fields.vegetables} />
      <PizzaMeat checkedOptions={state.fields.meat} />

      <div>
        <button type="submit">Заказать за {state.totalPrice} руб</button>
      </div>
    </form>
  );
}
