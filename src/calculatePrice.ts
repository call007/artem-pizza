import { data } from "./data";
import { StatePizza } from "./types";

export function calculatePrice(
  statePizza: StatePizza,
  initialPrice: number = 200
) {
  const dataValues = Object.values(data).flat();

  const checkedValues = Object.values(statePizza)
    .filter((item) => !!item)
    .flat();

  return checkedValues.reduce((totalPrice, value) => {
    const price = dataValues.find((item) => item.value === value)?.price || 0;

    return totalPrice + price;
  }, initialPrice);
}
