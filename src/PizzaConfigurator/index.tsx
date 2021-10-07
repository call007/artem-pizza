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
  pizza: {
    size: [{ id: 0, value: "30 см", price: 0 }],
    dough: [{ id: 0, value: "Тонкое", price: 0 }],
    sauce: [{ id: 0, value: "Томатный", price: 0 }],
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

    dispatch({
      type: inputElement.checked ? "add-option" : "remove-option",
      payload: {
        id: Number((inputElement.id.match(/\d+$/) || [])[0]),
        name: inputElement.name as FieldsName,
        price: Number(inputElement.dataset.price),
        value: inputElement.value,
        type: inputElement.type as InputType,
      },
    });
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

      <PizzaSize checkedOptions={state.pizza.size} />
      <PizzaDough checkedOptions={state.pizza.dough} />
      <PizzaSauce checkedOptions={state.pizza.sauce} />
      <PizzaCheese checkedOptions={state.pizza.cheese} />
      <PizzaVegetables checkedOptions={state.pizza.vegetables} />
      <PizzaMeat checkedOptions={state.pizza.meat} />

      <div>
        <button type="submit">Заказать за {state.totalPrice} руб</button>
      </div>
    </form>
  );
}
