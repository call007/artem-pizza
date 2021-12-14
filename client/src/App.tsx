import { Route, Switch } from "react-router-dom";
import { Menu } from "./components/Menu";
import { PrivateRoute } from "./components/PrivatePage";
import { PATH } from "./consts";
import {
  LogIn,
  NotFound,
  Orders,
  PizzaConfigurator,
  PizzaPreview,
  SignUp,
  Сheckout,
  СheckoutSuccess,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Menu />

      <Switch>
        <Route path={PATH.PizzaConfigurator} exact>
          <PizzaConfigurator />
        </Route>

        <Route path={PATH.PizzaPreview}>
          <PizzaPreview />
        </Route>

        <Route path={PATH.Login}>
          <LogIn />
        </Route>

        <Route path={PATH.Signup}>
          <SignUp />
        </Route>

        <Route path={PATH.Checkout}>
          <Сheckout />
        </Route>

        <Route path={PATH.CheckoutSuccess}>
          <СheckoutSuccess />
        </Route>

        <PrivateRoute path={PATH.Orders} redirectPath={PATH.Login}>
          <Orders />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
