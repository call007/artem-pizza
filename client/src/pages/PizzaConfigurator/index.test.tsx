import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router";
import { PizzaConfigurator } from ".";
import { mockStore } from "../../mocks/store";

function renderPizzaConfigurator() {
  const history = createMemoryHistory();

  return {
    ...render(
      <ReduxProvider store={mockStore}>
        <Router history={history}>
          <PizzaConfigurator />
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
