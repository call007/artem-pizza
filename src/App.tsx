import { Menu } from "./common/Menu";
import { PizzaConfigurator } from "./pages/PizzaConfigurator";
import { Route, Switch } from "react-router-dom";
import { Path } from "./types";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Сheckout } from "./pages/Сheckout";
import { СheckoutSuccess } from "./pages/СheckoutSuccess";
import { Orders } from "./pages/Orders";
import { PizzaPreview } from "./pages/PizzaPreview";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Menu />

      <Switch>
        <Route path={Path.PizzaConfigurator} exact>
          <PizzaConfigurator />
        </Route>

        <Route path={Path.Preview}>
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
