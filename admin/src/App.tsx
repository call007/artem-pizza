import { Container, CssBaseline, Tab, Tabs } from "@mui/material";
import { Route, Switch, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AddNewToppingForm } from "./pages/AddNewTopping";
import { Ingredients } from "./pages/Ingredients";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <CssBaseline enableColorScheme />

      <Container maxWidth="sm">
        <nav>
          <Tabs value={pathname}>
            <Tab
              label="List of ingredients"
              value="/ingredients"
              to="/ingredients"
              component={Link}
            />

            <Tab
              label="Adding new topings"
              value="/add-toppings"
              to="/add-toppings"
              component={Link}
            />
          </Tabs>
        </nav>

        <Switch>
          <Route path="/ingredients" exact>
            <Ingredients />
          </Route>

          <Route path="/add-toppings" exact>
            <AddNewToppingForm />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
