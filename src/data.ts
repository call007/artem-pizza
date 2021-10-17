import { Options } from "./types";

export const data: Options = {
  size: [
    { id: 0, type: "radio", price: 0, value: "30 см" },
    { id: 1, type: "radio", price: 0, value: "35 см" },
  ],
  dough: [
    { id: 0, type: "radio", price: 0, value: "Тонкое" },
    { id: 1, type: "radio", price: 50, value: "Пышное" },
  ],
  sauce: [
    { id: 0, type: "radio", price: 0, value: "Томатный" },
    { id: 1, type: "radio", price: 0, value: "Майонез" },
    { id: 2, type: "radio", price: 0, value: "Острый" },
    { id: 3, type: "radio", price: 0, value: "Грибной" },
    { id: 4, type: "radio", price: 0, value: "Чесночный" },
  ],
  cheese: [
    { id: 0, type: "checkbox", price: 29, value: "Моцарелла" },
    { id: 1, type: "checkbox", price: 29, value: "Чеддер" },
    { id: 2, type: "checkbox", price: 29, value: "Дор Блю" },
  ],
  vegetables: [
    { id: 0, type: "checkbox", price: 29, value: "Томаты" },
    { id: 1, type: "checkbox", price: 29, value: "Грибы" },
    { id: 2, type: "checkbox", price: 29, value: "Перец" },
  ],
  meat: [
    { id: 0, type: "checkbox", price: 29, value: "Бекон" },
    { id: 1, type: "checkbox", price: 29, value: "Пепперони" },
    { id: 2, type: "checkbox", price: 29, value: "Ветчина" },
  ],
};
