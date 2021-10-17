import { ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router";
import { data } from "../../data";
import { FieldsName, Path } from "../../types";
import { usePizzaContext } from "../../PizzaContext";
import { FieldsetCheckboxGroup } from "./FieldsetCheckboxGroup";
import { FieldsetRadioGroup } from "./FieldsetRadioGroup";

export function PizzaConfigurator() {
  const history = useHistory();
  const { state, dispatch, setIsPizzaBuilded } = usePizzaContext();

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
    setIsPizzaBuilded(true);
    history.push(Path.PizzaPreview);
  };

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
