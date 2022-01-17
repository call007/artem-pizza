import { Ingredient, Pizza } from "./types";

export function calculatePrice(statePizza: Pizza, dataPizza: Ingredient[]) {
  if (dataPizza.length === 0) {
    return 0;
  }

  const prices = Object.entries(statePizza)
    .map(([category, slug]) => {
      const slugs = typeof slug === "string" ? [slug] : slug;

      return slugs.map((slug) =>
        Number(
          dataPizza.find(
            (ingredient) =>
              ingredient.category === category && ingredient.slug === slug
          )?.price
        )
      );
    })
    .flat();

  return prices.reduce((totalPrice, price) => totalPrice + price, 0);
}
