import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ingredientsReducer } from "./state/ingredients/reducer";
import { pizzaReducer } from "./state/pizza/reducer";

export const store = createStore(
  combineReducers({ pizza: pizzaReducer, ingredients: ingredientsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
