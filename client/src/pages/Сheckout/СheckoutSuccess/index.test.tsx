import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider as ReduxProvider } from "react-redux";
import { MemoryRouter, Router } from "react-router";
import { ThemeProvider } from "styled-components";
import { СheckoutSuccess } from ".";
import { mockStore } from "../../../mocks/mockStore";
import { store } from "../../../store";
import { lightTheme } from "../../../styles";

describe("СheckoutSuccess", () => {
  it("renders correctly", async () => {
    const { container } = render(
      <MemoryRouter>
        <ReduxProvider store={mockStore}>
          <ThemeProvider theme={lightTheme}>
            <СheckoutSuccess price={400} date="21 октября 2020, 13:40" />
          </ThemeProvider>
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
            <ThemeProvider theme={lightTheme}>
              <СheckoutSuccess price={400} date="21 октября 2020, 13:40" />
            </ThemeProvider>
          </Router>
        </ReduxProvider>
      );

      expect(history.location.pathname).toEqual("/");
    });
  });
});
