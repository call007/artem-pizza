import { Checkbox, Fieldset } from "@ui-kit";
import { FieldsName, SelectedOption } from "../types";

interface Props {
  checkedOptions?: SelectedOption[];
}

const data: SelectedOption[] = [
  { id: 0, value: "Томаты", price: 29 },
  { id: 1, value: "Грибы", price: 29 },
  { id: 2, value: "Перец", price: 29 },
];

export function PizzaVegetables(props: Props) {
  return (
    <Fieldset legend="Добавьте овощи">
      {data.map((option) => (
        <Checkbox
          key={option.id}
          name={FieldsName.Vegetables}
          value={option.value}
          id={`${FieldsName.Vegetables}-${option.id}`}
          price={option.price}
          checked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
