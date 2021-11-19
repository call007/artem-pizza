import { State } from "./State";

export type Action =
  | {
      type: "update-pizza";
      payload: State["pizza"];
    }
  | {
      type: "update-price";
      payload: State["price"];
    }
  | {
      type: "update-ingredients";
      payload: State["ingredients"];
    };
