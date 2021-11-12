import { FieldValues, UseFormRegister } from "react-hook-form";
import { Checkbox, Fieldset } from "../../../components";
import { FieldsName, Option } from "../../../types";

interface Props {
  title: string;
  name: FieldsName;
  dataOptions: Option[];
  register: UseFormRegister<FieldValues>;
}

export function FieldsetCheckboxGroup(props: Props) {
  return (
    <Fieldset legend={props.title}>
      {props.dataOptions.map((option) => (
        <Checkbox
          key={option.id}
          value={option.value}
          price={option.price}
          id={`${props.name}-${option.id}`}
          {...props.register(props.name)}
        />
      ))}
    </Fieldset>
  );
}
