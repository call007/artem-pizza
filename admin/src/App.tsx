import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { AddNewToppingForm } from "./pages/AddNewTopping";
import { Ingredients } from "./pages/Ingredients";

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />

      <Container maxWidth="sm">
        <nav>
          <ul>
            <li>
              <Link to="/add-toppings">Добавление топпингов</Link>
            </li>
            <li>
              <Link to="/ingredients">Ингредиенты</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add-toppings">
            <AddNewToppingForm />
          </Route>
          <Route path="/ingredients">
            <Ingredients />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
