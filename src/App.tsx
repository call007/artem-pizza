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
        <Route path={Path.HOME} exact>
          <PizzaConfigurator />
        </Route>

        <Route path={Path.LOGIN}>
          <LogIn />
        </Route>

        <Route path={Path.SIGNUP}>
          <SignUp />
        </Route>

        <Route path={Path.CHECKOUT}>
          <Сheckout />
        </Route>

        <Route path={Path.CHECKOUT_SUCCESS}>
          <СheckoutSuccess />
        </Route>

        <Route path={Path.ORDERS}>
          <Orders />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
