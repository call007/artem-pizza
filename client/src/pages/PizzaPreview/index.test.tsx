import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { Path } from "../../consts";
import { PizzaPreview } from ".";
import { initialState, PizzaContext, PizzaProvider } from "../../PizzaContext";

describe("PizzaPreview", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();

    const { getByText } = render(
      <Router history={history}>
        <PizzaContext.Provider
          value={
            {
              state: initialState,
              isPizzaBuilded: true,
            } as any
          }
        >
          <PizzaPreview />
        </PizzaContext.Provider>
      </Router>
    );

    expect(getByText("30 см на тонком тесте")).toBeInTheDocument();
    expect(getByText("Томатный соус")).toBeInTheDocument();
  });

  describe("if the user has not submitted PizzaConfigurator form", () => {
    it("redirects to home page", () => {
      const history = createMemoryHistory();

      history.push(Path.PizzaPreview);

      render(
        <Router history={history}>
          <PizzaProvider>
            <PizzaPreview />
          </PizzaProvider>
        </Router>
      );

      expect(history.location.pathname).toEqual("/");
    });
  });
});
