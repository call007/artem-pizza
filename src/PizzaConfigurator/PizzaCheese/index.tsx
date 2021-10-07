import { Checkbox, Fieldset } from "@ui-kit";
import { FieldsName, SelectedOption } from "../types";

interface Props {
  checkedOptions?: SelectedOption[];
}

const data: SelectedOption[] = [
  { id: 0, value: "Моцарелла", price: 29 },
  { id: 1, value: "Чеддер", price: 29 },
  { id: 2, value: "Дор Блю", price: 29 },
];

export function PizzaCheese(props: Props) {
  return (
    <Fieldset legend="Добавьте сыр">
      {data.map((option) => (
        <Checkbox
          key={option.id}
          name={FieldsName.Cheese}
          value={option.value}
          id={`${FieldsName.Cheese}-${option.id}`}
          price={option.price}
          checked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
