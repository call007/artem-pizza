export type SelectedOption = {
  id: number;
  value: string;
  price?: number;
};

export enum FieldsName {
  Size = "size",
  Dough = "dough",
  Sauce = "sauce",
  Cheese = "cheese",
  Vegetables = "vegetables",
  Meat = "meat",
}

export type SelectedOptions = { [key in FieldsName]: SelectedOption[] };

export type InputType = "checkbox" | "radio";

export type State = { fields: SelectedOptions; totalPrice: number };

type Payload = {
  name: FieldsName;
  type: InputType;
} & SelectedOption;

export type Action =
  | {
      type: "add-option";
      payload: Payload;
    }
  | {
      type: "remove-option";
      payload: Payload;
    };
