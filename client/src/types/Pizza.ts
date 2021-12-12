import { Category } from ".";

export type Pizza = {
  [Category.Size]: string;
  [Category.Dough]: string;
  [Category.Sauces]: string;
  [Category.Cheese]: string[];
  [Category.Vegetables]: string[];
  [Category.Meat]: string[];
};
