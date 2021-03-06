import { configureStore } from "@reduxjs/toolkit";
import { IngredientsState } from "../state/ingredients/slice";
import { OrderState } from "../state/order/slice";
import { RootState } from "../store";

const initialOrderState: OrderState = {
  pizza: {
    size: "30",
    dough: "thin",
    sauce: "mayo",
    cheese: ["cheddar", "dor-blue", "mozarella"],
    vegetables: [
      "broccoli",
      "mushrooms",
      "olives",
      "onion",
      "pepper",
      "pineapple",
      "tomato",
    ],
    meat: ["bacon", "chicken", "ham", "pepperoni", "salami"],
  },
  price: 1700,
};

const initialIngredientsState: IngredientsState = {
  data: [
    {
      id: "Odd5HuC4",
      name: "Бекон",
      slug: "bacon",
      price: 100,
      category: "meat",
      image: "bacon.png",
      thumbnail: "bacon-thumb.png",
    },
    {
      id: "xXibhlsf",
      name: "Брокколи",
      slug: "broccoli",
      price: 100,
      category: "vegetables",
      image: "broccoli.png",
      thumbnail: "broccoli-thumb.png",
    },
    {
      id: "zPVQ1E4O",
      name: "Чеддер",
      slug: "cheddar",
      price: 100,
      category: "cheese",
      image: "cheddar.png",
      thumbnail: "cheddar-thumb.png",
    },
    {
      id: "2T7Cta-s",
      name: "Курица",
      slug: "chicken",
      price: 100,
      category: "meat",
      image: "chicken.png",
      thumbnail: "chicken-thumb.png",
    },
    {
      id: "jXkRoKy5",
      name: "Дор-Блю",
      slug: "dor-blue",
      price: 100,
      category: "cheese",
      image: "dor-blue.png",
      thumbnail: "dor-blue-thumb.png",
    },
    {
      id: "KfE8q4-l",
      name: "Грибы",
      slug: "mushrooms",
      price: 100,
      category: "vegetables",
      image: "mushrooms.png",
      thumbnail: "mushrooms-thumb.png",
    },
    {
      id: "KJ1aL-Cn",
      name: "Моцарелла",
      slug: "mozarella",
      price: 100,
      category: "cheese",
      image: "mozarella.png",
      thumbnail: "mozarella-thumb.png",
    },
    {
      id: "88ahAhOr",
      name: "Оливки",
      slug: "olives",
      price: 100,
      category: "vegetables",
      image: "olives.png",
      thumbnail: "olives-thumb.png",
    },
    {
      id: "l_dyuPpb",
      name: "Лук",
      slug: "onion",
      price: 100,
      category: "vegetables",
      image: "onion.png",
      thumbnail: "onion-thumb.png",
    },
    {
      id: "RyzrCzfQ",
      name: "Перец",
      slug: "pepper",
      price: 100,
      category: "vegetables",
      image: "pepper.png",
      thumbnail: "pepper-thumb.png",
    },
    {
      id: "3EEnpHfa",
      name: "Ананас",
      slug: "pineapple",
      price: 100,
      category: "vegetables",
      image: "pineapple.png",
      thumbnail: "pineapple-thumb.png",
    },
    {
      id: "szPhZsmh",
      name: "Томаты",
      slug: "tomato",
      price: 100,
      category: "vegetables",
      image: "tomato.png",
      thumbnail: "tomato-thumb.png",
    },
    {
      id: "HV4hh2BU",
      name: "30 см",
      slug: "30",
      price: 200,
      category: "size",
      image: "30.gif",
      thumbnail: "30-thumb.gif",
    },
    {
      id: "5PiC-p39",
      name: "Тонкое",
      slug: "thin",
      price: 0,
      category: "dough",
      image: "thin.gif",
      thumbnail: "thin-thumb.gif",
    },
    {
      id: "4hPSLMuj",
      name: "Пышное",
      slug: "lush",
      price: 50,
      category: "dough",
      image: "lush.gif",
      thumbnail: "lush-thumb.gif",
    },
    {
      id: "aqSkEbrH",
      name: "Томатный",
      slug: "tomato",
      price: 0,
      category: "sauce",
      image: "tomato.gif",
      thumbnail: "tomato-thumb.gif",
    },
    {
      id: "Q8oZCs1y",
      name: "Майонез",
      slug: "mayo",
      price: 0,
      category: "sauce",
      image: "mayo.gif",
      thumbnail: "mayo-thumb.gif",
    },
    {
      id: "L95cQecF",
      name: "Острый",
      slug: "spicy",
      price: 0,
      category: "sauce",
      image: "spicy.gif",
      thumbnail: "spicy-thumb.gif",
    },
    {
      id: "2XIHBIZH",
      name: "Грибной",
      slug: "mushroom",
      price: 0,
      category: "sauce",
      image: "mushroom.gif",
      thumbnail: "mushroom-thumb.gif",
    },
    {
      id: "cXT9WA0f",
      name: "Чесночный",
      slug: "garlic",
      price: 0,
      category: "sauce",
      image: "garlic.gif",
      thumbnail: "garlic-thumb.gif",
    },
    {
      id: "iOnJZ9bE",
      name: "Кисло-сладкий",
      slug: "sweet-and-sour",
      price: 0,
      category: "sauce",
      image: "sweet-and-sour.gif",
      thumbnail: "sweet-and-sour-thumb.gif",
    },
    {
      id: "Ehtb5WrA",
      name: "35 см",
      slug: "35",
      price: 200,
      category: "size",
      image: "35.gif",
      thumbnail: "35-thumb.gif",
    },
  ],
  isLoading: false,
};

export const mockState: RootState = {
  order: initialOrderState,
  ingredients: initialIngredientsState,
};

export const mockStore = configureStore({
  reducer: {
    order: (state = initialOrderState) => state,
    ingredients: (state = initialIngredientsState) => state,
  },
  devTools: false,
});
