import { Fieldset, Radiobox } from "@ui-kit";
import { FieldsName, SelectedOption } from "../types";

interface Props {
  checkedOptions?: SelectedOption[];
}

const data: SelectedOption[] = [
  { id: 0, value: "Тонкое" },
  { id: 1, value: "Пышное", price: 50 },
];

export function PizzaDough(props: Props) {
  return (
    <Fieldset legend="Тесто">
      {data.map((option) => (
        <Radiobox
          key={`${FieldsName.Dough}-${option.id}`}
          name={FieldsName.Dough}
          value={option.value}
          id={`${FieldsName.Dough}-${option.id}`}
          price={option.price}
          checked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
