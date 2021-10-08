import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { FieldsName, State } from "./types";
import { reducer } from "./reducer";
import { data } from "./data";

import { PizzaSize } from "./PizzaSize";
import { PizzaSauce } from "./PizzaSauce";
import { PizzaDough } from "./PizzaDough";
import { PizzaCheese } from "./PizzaCheese";
import { PizzaVegetables } from "./PizzaVegetables";
import { PizzaMeat } from "./PizzaMeat";
import { PizzaResult } from "./PizzaResult";

const initialState: State = {
  pizza: {
    size: data.size.filter((item) => item.id === 0),
    dough: data.size.filter((item) => item.id === 0),
    sauce: data.size.filter((item) => item.id === 0),
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

      <PizzaSize dataOptions={data.size} checkedOptions={state.pizza.size} />
      <PizzaDough dataOptions={data.dough} checkedOptions={state.pizza.dough} />
      <PizzaSauce dataOptions={data.sauce} checkedOptions={state.pizza.sauce} />
      <PizzaCheese
        dataOptions={data.cheese}
        checkedOptions={state.pizza.cheese}
      />
      <PizzaVegetables
        dataOptions={data.vegetables}
        checkedOptions={state.pizza.vegetables}
      />
      <PizzaMeat dataOptions={data.meat} checkedOptions={state.pizza.meat} />

      <div>
        <button type="submit">Заказать за {state.totalPrice} руб</button>
      </div>
    </form>
  );
}
