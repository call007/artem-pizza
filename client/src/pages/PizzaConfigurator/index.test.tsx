import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { PizzaConfigurator } from ".";
import { IngredientsProvider } from "../../context/IngredientsContext";
import { PizzaProvider } from "../../context/PizzaContext";

function renderPizzaConfigurator() {
  const history = createMemoryHistory();

  return {
    ...render(
      <IngredientsProvider>
        <PizzaProvider>
          <Router history={history}>
            <PizzaConfigurator />
          </Router>
        </PizzaProvider>
      </IngredientsProvider>
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
    // it("navigates to `/pizza-preview`", async () => {
    //   const { getByText, history } = renderPizzaConfigurator();
    //   await act(async () => {
    //     fireEvent.click(getByText(/Заказать за/i));
    //   });
    //   expect(history.location.pathname).toEqual("/pizza-preview");
    // });
  });
});
