import { Checkbox, Fieldset } from "@ui-kit";
import { FieldsName, SelectedOption } from "../types";

interface Props {
  checkedOptions?: SelectedOption[];
}

const data: SelectedOption[] = [
  { id: 0, value: "Бекон", price: 29 },
  { id: 1, value: "Пепперони", price: 29 },
  { id: 2, value: "Ветчина", price: 29 },
];

export function PizzaMeat(props: Props) {
  return (
    <Fieldset legend="Добавьте мясо">
      {data.map((option) => (
        <Checkbox
          key={option.id}
          name={FieldsName.Meat}
          value={option.value}
          id={`${FieldsName.Meat}-${option.id}`}
          price={option.price}
          checked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
