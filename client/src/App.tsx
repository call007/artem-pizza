import { Menu } from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import { Path } from "./consts";
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
        <Route path={Path.PizzaConfigurator} exact>
          <PizzaConfigurator />
        </Route>

        <Route path={Path.PizzaPreview}>
          <PizzaPreview />
        </Route>

        <Route path={Path.Login}>
          <LogIn />
        </Route>

        <Route path={Path.Signup}>
          <SignUp />
        </Route>

        <Route path={Path.Checkout}>
          <Сheckout />
        </Route>

        <Route path={Path.CheckoutSuccess}>
          <СheckoutSuccess />
        </Route>

        <Route path={Path.Orders}>
          <Orders />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
