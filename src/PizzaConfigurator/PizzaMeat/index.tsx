import { Checkbox, Fieldset } from "@ui-kit";
import { FieldsName, Option } from "../types";

interface Props {
  dataOptions: Option[];
  checkedOptions?: Option[];
}

export function PizzaMeat(props: Props) {
  return (
    <Fieldset legend="Добавьте мясо">
      {props.dataOptions.map((option) => (
        <Checkbox
          key={option.id}
          data-id={option.id}
          value={option.value}
          price={option.price}
          name={FieldsName.Meat}
          id={`${FieldsName.Meat}-${option.id}`}
          defaultChecked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
