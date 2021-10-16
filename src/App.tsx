import { Menu } from "./common/Menu";
import { PizzaConfigurator } from "./pages/PizzaConfigurator";
import { Route, Switch } from "react-router-dom";
import { Path } from "./types";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Сheckout } from "./pages/Сheckout";
import { СheckoutSuccess } from "./pages/СheckoutSuccess";
import { Orders } from "./pages/Orders";

function App() {
  return (
    <div className="App">
      <Menu />

      <Switch>
        <Route path={Path.Home} exact>
          <PizzaConfigurator />
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
      </Switch>
    </div>
  );
}

export default App;
