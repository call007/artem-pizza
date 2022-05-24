import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router";
import App from "./App";
import { PATH } from "./consts";
import { AuthProvider, ThemeContextProvider } from "./context";
import { mockStore } from "./mocks/mockStore";

function renderApp() {
  const history = createMemoryHistory();

  /**
   * Мокаем matchMedia для успешного теста компонентов, использующих
   * window.matchMedia
   */
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  return {
    ...render(
      <ReduxProvider store={mockStore}>
        <Router history={history}>
          <ThemeContextProvider>
            <AuthProvider isLoggedIn>
              <App />
            </AuthProvider>
          </ThemeContextProvider>
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

    expect(container.innerHTML).toMatch("Оплатить 1880 руб");
  });

  it("navigates to orders page", () => {
    const { history, container } = renderApp();
    history.push(PATH.Orders);

    expect(container.innerHTML).toMatch("Мои заказы");
  });

  it("shows 404 page", () => {
    const { history, container } = renderApp();
    history.push("/some/bad/route");

    expect(container.innerHTML).toMatch("404 - страница не найдена");
  });
});
