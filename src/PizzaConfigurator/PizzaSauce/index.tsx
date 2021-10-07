import { Fieldset, Radiobox } from "@ui-kit";
import { FieldsName, SelectedOption } from "../types";

interface Props {
  checkedOptions?: SelectedOption[];
}

const data: SelectedOption[] = [
  { id: 0, value: "Томатный", price: 0 },
  { id: 1, value: "Майонез", price: 0 },
  { id: 2, value: "Острый", price: 0 },
  { id: 3, value: "Грибной", price: 0 },
  { id: 4, value: "Чесночный", price: 0 },
];

export function PizzaSauce(props: Props) {
  return (
    <Fieldset legend="Выберите соус">
      {data.map((option) => (
        <Radiobox
          key={option.id}
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
