import { SkeletonTheme } from "react-loading-skeleton";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
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
import { GlobalStyles, themes } from "./styles";
import { useThemeContext } from "./ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={themes[theme]}>
      test
      <GlobalStyles />
      <SkeletonTheme
        baseColor={themes[theme].colors.gray100}
        highlightColor={themes[theme].colors.white}
        borderRadius=".875rem"
      >
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
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
