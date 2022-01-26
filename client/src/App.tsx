import { Route, Switch } from "react-router-dom";
import { PrivateRoute, ScrollToTop } from "./components";
import { PATH } from "./consts";
import {
  LogIn,
  NotFound,
  Orders,
  PizzaConfigurator,
  SignUp,
  Сheckout,
} from "./pages";

function App() {
  return (
    <div className="App">
      <ScrollToTop />

      <Switch>
        <Route path={PATH.PizzaConfigurator} exact>
          <PizzaConfigurator />
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
