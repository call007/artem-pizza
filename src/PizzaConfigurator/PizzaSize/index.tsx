import { Fieldset, Radiobox } from "@ui-kit";
import { FieldsName, SelectedOption } from "../types";

interface Props {
  checkedOptions?: SelectedOption[];
}

const data: SelectedOption[] = [
  { id: 0, value: "30 см" },
  { id: 1, value: "35 см" },
];

export function PizzaSize(props: Props) {
  return (
    <Fieldset legend="Размер">
      {data.map((option) => (
        <Radiobox
          key={`${FieldsName.Size}-${option.id}`}
          name={FieldsName.Size}
          value={option.value}
          id={`${FieldsName.Size}-${option.id}`}
          price={option.price}
          checked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
