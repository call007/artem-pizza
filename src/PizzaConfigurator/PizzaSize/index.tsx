import { Fieldset, Radiobox } from "../../common";
import { FieldsName, Option } from "../types";

interface Props {
  dataOptions: Option[];
  checkedOptions?: Option[];
}

export function PizzaSize(props: Props) {
  return (
    <Fieldset legend="Размер">
      {props.dataOptions.map((option) => (
        <Radiobox
          key={option.id}
          data-id={option.id}
          value={option.value}
          price={option.price}
          name={FieldsName.SIZE}
          id={`${FieldsName.SIZE}-${option.id}`}
          defaultChecked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
