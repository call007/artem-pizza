import { FieldsName, Ingredient } from ".";

export type StateIngredient = string | null;
export type StateIngredients = string[];

export type StatePizza = {
  [FieldsName.Size]: StateIngredient;
  [FieldsName.Dough]: StateIngredient;
  [FieldsName.Sauces]: StateIngredient;
  [FieldsName.Cheese]: StateIngredients;
  [FieldsName.Vegetables]: StateIngredients;
  [FieldsName.Meat]: StateIngredients;
};

export type State = {
  pizza?: StatePizza;
  price?: number;
  ingredients?: Ingredient[];
};
