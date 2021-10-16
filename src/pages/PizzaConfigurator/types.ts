export type InputType = "checkbox" | "radio";

export type Option = {
  id: number;
  value: string;
  price: number;
  type: InputType;
};

export enum FieldsName {
  SIZE = "size",
  DOUGH = "dough",
  SAUCE = "sauce",
  CHEESE = "cheese",
  VEGETABLES = "vegetables",
  MEAT = "meat",
}

export type Options = { [key in FieldsName]: Option[] };

export type State = { pizza: Options; totalPrice: number };

type Payload = {
  name: FieldsName;
} & Option;

export type Action =
  | {
      type: "add-option";
      payload: Payload;
    }
  | {
      type: "remove-option";
      payload: Payload;
    };
