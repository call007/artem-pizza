import { FieldValues, UseFormRegister } from "react-hook-form";
import { Fieldset, Radiobox } from "../../../components";
import { FieldsName, Option } from "../../../types";

interface Props {
  title: string;
  name: FieldsName;
  dataOptions: Option[];
  register: UseFormRegister<FieldValues>;
  isVisiblePrice?: boolean;
}

export function FieldsetRadioGroup({ isVisiblePrice = true, ...props }: Props) {
  return (
    <Fieldset legend={props.title}>
      {props.dataOptions.map((option) => (
        <Radiobox
          key={option.id}
          value={option.value}
          price={isVisiblePrice ? option.price : undefined}
          id={`${props.name}-${option.id}`}
          {...props.register(props.name)}
        />
      ))}
    </Fieldset>
  );
}
