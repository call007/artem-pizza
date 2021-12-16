import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router";
import { Сheckout } from ".";
import { PATH } from "../../consts";
import { mockStore } from "../../mocks/mockStore";
import { store } from "../../store";

describe("Сheckout", () => {
  describe("if the user has not submitted PizzaConfigurator form", () => {
    it("redirects to home page", () => {
      const history = createMemoryHistory();

      history.push(PATH.PizzaPreview);

      render(
        <ReduxProvider store={store}>
          <Router history={history}>
            <Сheckout />
          </Router>
        </ReduxProvider>
      );

      expect(history.location.pathname).toEqual("/");
    });
  });

  describe("if the user has submitted PizzaConfigurator form", () => {
    it("renders correctly", () => {
      const history = createMemoryHistory();

      history.push(PATH.PizzaPreview);

      const { getByText } = render(
        <ReduxProvider store={mockStore}>
          <Router history={history}>
            <Сheckout />
          </Router>
        </ReduxProvider>
      );

      expect(getByText("Оформление заказа")).toBeInTheDocument();
      expect(getByText("Отправить")).toBeInTheDocument();
    });
  });
});
