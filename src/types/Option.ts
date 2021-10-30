import { FieldsName } from ".";

export type Option = {
  id: number;
  value: string;
  price: number;
};

export type Options = { [key in FieldsName]: Option[] };
