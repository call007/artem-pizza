import { Menu } from "./common/Menu";
import { PizzaConfigurator } from "./PizzaConfigurator";
import { Route, Switch } from "react-router-dom";
import { Pages } from "./types";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";

function App() {
  return (
    <div className="App">
      <Menu />

      <Switch>
        <Route path={Pages.HOME} exact>
          <PizzaConfigurator />
        </Route>

        <Route path={Pages.LOGIN}>
          <LogIn />
        </Route>

        <Route path={Pages.SIGNUP}>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
