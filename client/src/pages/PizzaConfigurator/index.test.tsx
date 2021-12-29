import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router";
import { ThemeProvider } from "styled-components";
import { PizzaConfigurator } from ".";
import { mockStore } from "../../mocks/mockStore";
import { theme } from "../../styles";

function renderPizzaConfigurator() {
  const history = createMemoryHistory();

  return {
    ...render(
      <ReduxProvider store={mockStore}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <PizzaConfigurator />
          </ThemeProvider>
        </Router>
      </ReduxProvider>
    ),
    history,
  };
}

describe("PizzaConfigurator page", () => {
  it("renders correctly", () => {
    const { getByText } = renderPizzaConfigurator();

    expect(getByText("Собери свою пиццу")).toBeInTheDocument();
  });

  describe(".handleChange", () => {
    it("navigates to `/pizza-preview`", async () => {
      const { getByText, history } = renderPizzaConfigurator();
      await act(async () => {
        fireEvent.click(getByText(/Заказать за/i));
      });
      expect(history.location.pathname).toEqual("/pizza-preview");
    });
  });
});
