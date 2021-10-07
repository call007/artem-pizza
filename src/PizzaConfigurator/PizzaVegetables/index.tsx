import { Checkbox, Fieldset } from "@ui-kit";
import { FieldsName, Option } from "../types";

interface Props {
  dataOptions: Option[];
  checkedOptions?: Option[];
}

export function PizzaVegetables(props: Props) {
  return (
    <Fieldset legend="Добавьте овощи">
      {props.dataOptions.map((option) => (
        <Checkbox
          key={option.id}
          data-id={option.id}
          value={option.value}
          price={option.price}
          name={FieldsName.Vegetables}
          id={`${FieldsName.Vegetables}-${option.id}`}
          defaultChecked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
