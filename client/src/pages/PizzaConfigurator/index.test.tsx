import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { PizzaProvider } from "../../PizzaContext";
import { PizzaConfigurator } from ".";

function renderPizzaConfigurator() {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router history={history}>
        <PizzaConfigurator />
      </Router>,
      { wrapper: PizzaProvider }
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
