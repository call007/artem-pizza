import { calculatePrice } from "./calculatePrice";

describe("calculatePrice", () => {
  it("returns the sum price of all selected pizza parts", () => {
    expect(
      calculatePrice({
        size: "30 см",
        dough: "Пышное",
        sauce: "Томатный",
        cheese: ["Моцарелла", "Чеддер", "Дор Блю"],
        vegetables: ["Томаты", "Грибы", "Перец"],
        meat: ["Бекон", "Пепперони", "Ветчина"],
      })
    ).toEqual(511);
  });
});
