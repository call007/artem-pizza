import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import App from "./App";
import { IngredientsProvider } from "./context/IngredientsContext";
import { PizzaProvider } from "./context/PizzaContext";

function renderApp() {
  const history = createMemoryHistory();

  return {
    ...render(
      <IngredientsProvider>
        <PizzaProvider>
          <Router history={history}>
            <App />
          </Router>
        </PizzaProvider>
      </IngredientsProvider>
    ),
    history,
  };
}

describe("App navigation", () => {
  describe("pizza configurator link click", () => {
    it("navigates to pizza configurator page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = renderApp();

      expect(container.innerHTML).toMatch("Собери свою пиццу");

      fireEvent.click(getByText(/Конфигуратор пиццы/i));

      expect(history.location.pathname).toEqual("/");
    });
  });

  describe("log in link click", () => {
    it("navigates to log in page", () => {
      const { container, getByText } = renderApp();

      fireEvent.click(getByText(/Авторизация/i));

      expect(container.innerHTML).toMatch("Если вы не зарегистрированы");
    });
  });

  describe("sign up link click", () => {
    it("navigates to log in page", () => {
      const { container, getByText } = renderApp();

      fireEvent.click(getByText(/Регистрация/i));

      expect(container.innerHTML).toMatch("Если вы уже зарегистрированы");
    });
  });

  // describe("checkout link click", () => {
  //   it("navigates to checkout page", () => {
  //     const { container, getByText } = renderApp();

  //     fireEvent.click(getByText("Оформление заказа"));

  //     expect(container.innerHTML).toMatch("Отправить");
  //   });
  // });

  describe("checkout success link click", () => {
    it("navigates to checkout success page", () => {
      const { container, getByText } = renderApp();

      fireEvent.click(getByText("Оформление заказа (успех)"));

      expect(container.innerHTML).toMatch(
        "Заказ успешно оплачен, ждите вашу пиццу уже через час"
      );
    });
  });

  describe("orders link click", () => {
    it("navigates to orders page", () => {
      const { container, getByText } = renderApp();

      fireEvent.click(getByText("Мои заказы"));

      expect(container.innerHTML).toMatch("Мои заказы");
    });
  });

  describe("with an unsupported URL", () => {
    it("shows 404 page", () => {
      const { history, container } = renderApp();
      history.push("/some/bad/route");

      expect(container.innerHTML).toMatch("404 - page not found");
    });
  });
});
