import { Checkbox, Fieldset } from "../../../common";
import { FieldsName, Option } from "../../../types";

interface Props {
  title: string;
  name: FieldsName;
  dataOptions: Option[];
  checkedOptions?: Option[];
}

export function FieldsetCheckboxGroup(props: Props) {
  return (
    <Fieldset legend={props.title}>
      {props.dataOptions.map((option) => (
        <Checkbox
          key={option.id}
          data-id={option.id}
          value={option.value}
          price={option.price}
          name={props.name}
          id={`${props.name}-${option.id}`}
          defaultChecked={
            !!props.checkedOptions?.find((item) => item.id === option.id)
          }
        />
      ))}
    </Fieldset>
  );
}
