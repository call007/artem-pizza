import { useDispatch } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ingredientsReducer } from "./state/ingredients/reducer";
import { pizzaReducer } from "./state/pizza/reducer";
import { userReducer } from "./state/user/reducer";

export const store = createStore(
  combineReducers({
    pizza: pizzaReducer,
    ingredients: ingredientsReducer,
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export const useThunkDispatch = () => useDispatch();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
