import { Category } from ".";

export type StateIngredient = string;
export type StateIngredients = string[];

export type StatePizza = {
  [Category.Size]: StateIngredient;
  [Category.Dough]: StateIngredient;
  [Category.Sauces]: StateIngredient;
  [Category.Cheese]: StateIngredients;
  [Category.Vegetables]: StateIngredients;
  [Category.Meat]: StateIngredients;
};

export type State = {
  pizza?: StatePizza;
  price?: number;
};
