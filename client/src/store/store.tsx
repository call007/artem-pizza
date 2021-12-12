import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { pizzaReducer } from "../state/pizza/reducer";
import { ingredientsReducer } from "../state/reducers/ingredients/reducer";

export const store = createStore(
  combineReducers({ pizza: pizzaReducer, ingredients: ingredientsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
