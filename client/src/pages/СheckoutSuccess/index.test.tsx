import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider as ReduxProvider } from "react-redux";
import { MemoryRouter, Router } from "react-router";
import { СheckoutSuccess } from ".";
import { mockStore } from "../../mocks/mockStore";
import { store } from "../../store";

describe("СheckoutSuccess", () => {
  it("renders correctly", async () => {
    const { container } = render(
      <MemoryRouter>
        <ReduxProvider store={mockStore}>
          <СheckoutSuccess />
        </ReduxProvider>
      </MemoryRouter>
    );

    expect(container.innerHTML).toMatch(
      "Заказ успешно оплачен, ждите вашу пиццу уже через час"
    );
  });

  describe("if the user has not submitted PizzaConfigurator form", () => {
    it("redirects to home page", () => {
      const history = createMemoryHistory();

      render(
        <ReduxProvider store={store}>
          <Router history={history}>
            <СheckoutSuccess />
          </Router>
        </ReduxProvider>
      );

      expect(history.location.pathname).toEqual("/checkout");
    });
  });
});
