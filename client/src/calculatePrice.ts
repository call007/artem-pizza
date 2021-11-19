import { data } from "./data";
import { StatePizza } from "./types";

export function calculatePrice(statePizza: StatePizza) {
  const dataValues = Object.values(data).flat();
  const checkedValues = Object.values(statePizza).flat();

  return checkedValues.reduce((totalPrice, value) => {
    const price = dataValues.find((item) => item.slug === value)?.price || 0;

    return totalPrice + price;
  }, 0);
}
