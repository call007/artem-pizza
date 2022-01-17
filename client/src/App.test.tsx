import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { PATH } from "./consts";
import { mockWhithAuthorizedUserStore } from "./mocks/mockStore";
import { theme } from "./styles";

function renderApp() {
  const history = createMemoryHistory();

  return {
    ...render(
      <ReduxProvider store={mockWhithAuthorizedUserStore}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Router>
      </ReduxProvider>
    ),
    history,
  };
}

describe("App navigation", () => {
  it("navigates to pizza configurator page", () => {
    const { history, container } = renderApp();
    history.push(PATH.PizzaConfigurator);

    expect(container.innerHTML).toMatch("Собери свою пиццу");
    expect(history.location.pathname).toEqual("/");
  });

  it("navigates to log in page", () => {
    const { history, container } = renderApp();
    history.push(PATH.Login);

    expect(container.innerHTML).toMatch("Вы успешно авторизовались.");
  });

  it("navigates to sign up page", () => {
    const { history, container } = renderApp();
    history.push(PATH.Signup);

    expect(container.innerHTML).toMatch("Если вы уже зарегистрированы");
  });

  it("navigates to checkout page", () => {
    const { history, container } = renderApp();
    history.push(PATH.Checkout);

    expect(container.innerHTML).toMatch("Отправить");
  });

  it("navigates to orders page", () => {
    const { history, container } = renderApp();
    history.push(PATH.Orders);

    expect(container.innerHTML).toMatch("Мои заказы");
  });

  it("shows 404 page", () => {
    const { history, container } = renderApp();
    history.push("/some/bad/route");

    expect(container.innerHTML).toMatch("404 - page not found");
  });
});
