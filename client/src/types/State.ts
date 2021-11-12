import { FieldsName } from ".";

export type StateOption = string | null;
export type StateOptions = string[];

export type StatePizza = {
  [FieldsName.Size]: StateOption;
  [FieldsName.Dough]: StateOption;
  [FieldsName.Sauce]: StateOption;
  [FieldsName.Cheese]: StateOptions;
  [FieldsName.Vegetables]: StateOptions;
  [FieldsName.Meat]: StateOptions;
};

export type State = {
  pizza?: StatePizza;
};
