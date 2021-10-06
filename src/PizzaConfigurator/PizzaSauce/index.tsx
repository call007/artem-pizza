import { Fieldset, Radiobox } from "@ui-kit";
import { FieldsName, SelectedOption } from "../types";

interface Props {
  checkedOptions?: SelectedOption[];
}

const data: SelectedOption[] = [
  { id: 0, value: "Томатный" },
  { id: 1, value: "Майонез" },
  { id: 2, value: "Острый" },
  { id: 3, value: "Грибной" },
  { id: 4, value: "Чесночный" },
];

export function PizzaSauce(props: Props) {
  return (
    <Fieldset legend="Выберите соус">
      {data.map((option) => (
        <Radiobox
          key={`${FieldsName.Sauce}-${option.id}`}
          name={FieldsName.Sauce}
          value={option.value}
          id={`${FieldsName.Sauce}-${option.id}`}
          price={option.price}
          checked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
