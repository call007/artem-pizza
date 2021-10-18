import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { PizzaProvider, usePizzaContext } from "../../PizzaContext";
import { PizzaConfigurator } from ".";
import { renderHook } from "@testing-library/react-hooks";

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
    it("changes pizza price when ingredients value changed", () => {
      // const { result } = renderHook(usePizzaContext);

      // console.log(result.current.state.totalPrice);

      const { getByText } = renderPizzaConfigurator();

      fireEvent.click(getByText(/Моцарелла/i));
      fireEvent.click(getByText(/Томаты/i));

      expect(getByText("Заказать за 258 руб")).toBeInTheDocument();
    });

    it("navigates to `/pizza-preview`", () => {
      const { getByText, history } = renderPizzaConfigurator();

      fireEvent.click(getByText(/Заказать за/i));

      expect(history.location.pathname).toEqual("/pizza-preview");
    });
  });
});
