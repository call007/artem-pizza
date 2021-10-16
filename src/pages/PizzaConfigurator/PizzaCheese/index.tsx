import { Checkbox, Fieldset } from "../../../common";
import { FieldsName, Option } from "../types";

interface Props {
  dataOptions: Option[];
  checkedOptions?: Option[];
}

export function PizzaCheese(props: Props) {
  return (
    <Fieldset legend="Добавьте сыр">
      {props.dataOptions.map((option) => (
        <Checkbox
          key={option.id}
          data-id={option.id}
          value={option.value}
          price={option.price}
          name={FieldsName.Cheese}
          id={`${FieldsName.Cheese}-${option.id}`}
          defaultChecked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
