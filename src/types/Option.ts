import { FieldsName } from ".";
import { InputType } from "./InputType";

export type Option = {
  id: number;
  value: string;
  price: number;
  type: InputType;
};

export type Options = { [key in FieldsName]: Option[] };
